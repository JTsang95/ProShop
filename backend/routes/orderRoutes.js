import express from 'express';
const router = express.Router();
import { addOrderItems } from '../controllers/orderController.js';
import { protect } from '../middleware/authMiddleware.js';

//call the api methods from the controller
router.route('/').post(protect, addOrderItems);

export default router;
