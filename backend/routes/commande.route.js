import Express from "express";
import {
    getCommandeByID, getCommandes, createCommande,
    updateCommande, deleteCommande
} from "../controllers/commandes.controllers.js";

const router = Express.Router();

router.get('/', getCommandes);
router.post('/', createCommande);
router.get('/:id', getCommandeByID);
router.put('/:id', updateCommande);
router.delete('/:id', deleteCommande);
// en envoie router vers app.js
export default router