import { Router } from 'express';
import { CategoryController } from '../controllers'

const router = Router();

// CRUD Operations
// Create a new product
router.post('/', CategoryController.create);

// Read all products
router.get('/', CategoryController.getAll);

// Read product by ID
router.get('/:id', CategoryController.getById);

// Update a product
router.put('/:id', CategoryController.update);

// Delete a product
router.delete('/:id', CategoryController.delete);

export default router;