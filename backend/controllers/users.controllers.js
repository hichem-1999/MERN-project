import User from "../models/user.js";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";

export const createUser = async (req, res) => {
    const { name, email, telephone,password,createdAt,updatedAt,regiter_date} = req.body;

    const newUser = new User({ name: name, email: email ,telephone: telephone,password: password,createdAt: createdAt,updatedAt: updatedAt,regiter_date:regiter_date})

    try {
        await newUser.save();

        res.status(201).json(newUser);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

const generateAccessToken=(user)=>{
    return jwt.sign({user},process.env.ACCESS_TOKEN_SECRET,{expiresIn:'1800s'})
}

export const getUserByEmail = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.find({ email, password });
        if (user == "") {
            res.status(401).send('utilisateur non existant');
            return
        };
        const accessToken = generateAccessToken(user);
        res.status(200).json({
            accessToken
        })
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


export const getUsers = async (req, res) => {
    try {
        const id = await User.find();

        res.status(200).json(id);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
export const getUserByID = async (req, res) => {
    try {
        //const categorieID = req.params.id;
        const user = await User.findById(req.params.id);

        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

//new code 
export const updateUser = async (req, res) => {
    const id = req.params.id;
    const { name, email, telephone,password,createdAt,updatedAt ,regiter_date} = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send(`pas de user avec un id: ${id}`);
    } else {
        const user1 = {name: name, email: email ,telephone: telephone,password: password,createdAt: createdAt,updatedAt: updatedAt,regiter_date:regiter_date, _id: id };
        await User.findByIdAndUpdate(id, user1);
        res.status(201).json(user1);
    }
}


export const deleteUser = async (req, res) => {
    const id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).send(`pas de user avec l'ID: ${id}`);
    await User.findByIdAndDelete(id);
    res.json({ message: "user deleted successfully." });
}
