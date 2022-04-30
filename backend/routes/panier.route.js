import express from 'express';
import {
    getPaniers, getPanierByID, createPanier,
    updatePanier, deletePanier
} from '../controllers/paniers.controllers.js';
const router = express.Router();
router.get('/', getPaniers);
router.post('/', createPanier);
router.get('/:id', getPanierByID);
router.put('/:id', updatePanier);
router.delete('/:id', deletePanier);
export default router;