import mongoose from "mongoose";
import Commande from "../models/commande.js";

export const getCommandes = async (req, res) => {
    try {
        const commande = await Commande.find();

        res.status(200).json(commande);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
export const getCommandeByID = async (req, res) => {
    try {
        //const commandeID = req.params.id;
        const commande = await Commande.findById(req.params.id);

        res.status(200).json(commande);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
export const createCommande = async (req, res) => {
    const { paye, refcommande, client,dateAchat,mt_total} = req.body;

    const newCommande = new Commande({ paye: paye, refcommande: refcommande,client: client, dateAchat: dateAchat,mt_total: mt_total })
    try {
        await newCommande.save();

        res.status(201).json(newCommande);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

//new code 
export const updateCommande = async (req, res) => {
    const id = req.params.id;
    const { paye, refcommande, client,dateAchat,mt_total} = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send(`pas de commande avec un id: ${id}`);
    } else {
        const cat1 = {  paye, refcommande, client,dateAchat,mt_total, _id: id };
        await Commande.findByIdAndUpdate(id, cat1);
        res.status(201).json(cat1);
    }
}


export const deleteCommande = async (req, res) => {
    const id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).send(`pas de commande avec l'ID: ${id}`);
    await Commande.findByIdAndDelete(id);
    res.json({ message: "commande deleted successfully." });
}
