import Fournisseur from "../models/fournisseur.js";
import mongoose from "mongoose";

export const getFournisseurs = async (req, res) => {
    try {
        const cat = await Fournisseur.find();

        res.status(200).json(cat);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
export const getFournisseurByID = async (req, res) => {
    try {
        //const FournisseurID = req.params.id;
        const cat = await Fournisseur.findById(req.params.id);

        res.status(200).json(cat);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
export const createFournisseur = async (req, res) => {
    const { code, raisoc ,email,tel} = req.body;

   

    const newFournisseur = new Fournisseur({ code: code, raisoc: raisoc,email: email, tel: tel })
    try {
        await newFournisseur.save();

        res.status(201).json(newFournisseur);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}
//new code 
export const updateFournisseur = async (req, res) => {
    const id = req.params.id;
    const { code, raisoc } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send(`pas de Fournisseur avec un id: ${id}`);
    } else {
        const cat1 = { code: code, raisoc: raisoc,email: email, tel: tel , _id: id };
        await Fournisseur.findByIdAndUpdate(id, cat1);
        res.status(201).json(cat1);
    }
}


export const deleteFournisseur = async (req, res) => {
    const id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).send(`pas de Fournisseur avec l'ID: ${id}`);
    await Fournisseur.findByIdAndDelete(id);
    res.json({ message: "Fournisseur deleted successfully." });
}
