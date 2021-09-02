import express from 'express';
const router = express.Router();
import { authUser } from '../controllers/userController.js';

//call the api methods from the controller
router.post('/login', authUser);

export default router;
