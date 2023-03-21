import { Router } from 'express';
import {OrderController} from '../controllers'

const router = Router();

// CRUD Operations
// Create a new order
router.post('/', OrderController.create);

// Read all orders
// router.get('/', OrderController.getAll);

// // Read order by ID
// router.get('/:id', OrderController.getById);

// // Update a order
// router.put('/:id', OrderController.update);

// // Delete a order
// router.delete('/:id', OrderController.delete);

export default router;

