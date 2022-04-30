import Panier from "../models/Panier.js";
import mongoose from "mongoose";


export const getPaniers = async (req, res) => {
    try {
        const id = await Panier.find();

        res.status(200).json(id);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
export const getPanierByID = async (req, res) => {
    try {
        //const categorieID = req.params.id;
        const Panier = await Panier.findById(req.params.id);

        res.status(200).json(Panier);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
export const createPanier = async (req, res) => {
    const { remise, qte_ach, tot_ligne,refarticle,refcommande} = req.body;

    const newPanier = new Panier({ remise: remise, qte_ach: qte_ach ,tot_ligne: tot_ligne,refarticle: refarticle,refcommande: refcommande})


  
    try {
        await newPanier.save();

        res.status(201).json(newPanier);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}
//new code 
export const updatePanier = async (req, res) => {
    const id = req.params.id;
    const { remise, qte_ach, tot_ligne,refarticle,refcommande } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send(`pas de Panier avec un id: ${id}`);
    } else {
        const panier1 = {remise: remise, qte_ach: qte_ach ,tot_ligne: tot_ligne,refarticle: refarticle,refcommande: refcommande, _id: id };
        await Panier.findByIdAndUpdate(id, panier1);
        res.status(201).json(panier1);
    }
}


export const deletePanier = async (req, res) => {
    const id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).send(`pas de Panier avec l'ID: ${id}`);
    await Panier.findByIdAndDelete(id);
    res.json({ message: "Panier deleted successfully." });
}
