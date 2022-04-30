import express from 'express';
import { getUsers, getUserByEmail, createUser, updateUser,
deleteUser } from '../controllers/users.controllers.js';
const router = express.Router();

router.post('/', createUser);
router.post('/login', getUserByEmail);

router.get('/', getUsers);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);
export default router;