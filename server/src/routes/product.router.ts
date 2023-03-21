import { Router } from 'express';
import {ProductController} from '../controllers'

const router = Router();

// CRUD Operations
// Create a new product
router.post('/', ProductController.create);

// Read all products
router.get('/', ProductController.getAll);

// Read product by ID
router.get('/:id', ProductController.getById);

// Update a product
router.put('/:id', ProductController.update);

// Delete a product
router.delete('/:id', ProductController.delete);

export default router;

