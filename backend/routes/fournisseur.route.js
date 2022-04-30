import Express from "express";
import {
    getFournisseurByID, getFournisseurs, createFournisseur,
    updateFournisseur, deleteFournisseur
} from "../controllers/fournisseurs.controllers.js";

const router = Express.Router();

router.get('/', getFournisseurs);
router.post('/', createFournisseur);
router.get('/:id', getFournisseurByID);
router.put('/:id', updateFournisseur);
router.delete('/:id', deleteFournisseur);
// en envoie router vers app.js
export default router