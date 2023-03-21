import { Router } from 'express';
import { CategoryController } from '../controllers'

const router = Router();

// CRUD Operations
// Create a new category
router.post('/', CategoryController.create);

// Read all categories
router.get('/', CategoryController.getAll);

// Read category by ID
router.get('/:id', CategoryController.getById);

// Update a category
router.put('/:id', CategoryController.update);

// Delete a category
router.delete('/:id', CategoryController.delete);

export default router;