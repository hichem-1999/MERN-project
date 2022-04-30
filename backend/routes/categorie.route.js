import express from 'express';
import { getCategories, createCategorie, getCategorieByID, updateCategorie, deleteCategorie } from '../controllers/categories.controllers.js';

const router = express.Router();

router.get('/', getCategories);
router.post('/', createCategorie);
router.get('/:id', getCategorieByID);
router.put('/:id', updateCategorie);
router.delete('/:id', deleteCategorie);

// en envoie router vers app.js
export default router
