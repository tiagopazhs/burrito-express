import { Request, Response } from "express";
import { CategoryModel } from "../models";

class CategoryController {

  // CRUD Operations
  // Create a new product
  async create(req: Request, res: Response): Promise<Response> {
    try {
      const { name, description } = req.body;
      const createdCategory = await CategoryModel.create({ name, description });
      return res.status(201).json(createdCategory);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Failed to create category" });
    }
  }

  // Read all products
  async getAll(req: Request, res: Response): Promise<Response> {
    try {
      const categories = await CategoryModel.findAll();
      return res.status(200).json(categories);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Failed to get categories" });
    }
  }

  // Read product by ID
  async getById(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const category = await CategoryModel.findByPk(id);
      if (!category) {
        return res.status(404).json({ error: "Category not found" });
      }
      return res.status(200).json(category);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Failed to get category by id" });
    }
  }

  // Update a product
  async update(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const [updatedCategory] = await CategoryModel.update(req.body, {
        where: { id },
      });
      if (!updatedCategory) {
        return res.status(404).json({ error: "Category not found" });
      }
      const updatedData = await CategoryModel.findByPk(id);
      return res.status(200).json(updatedData);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Failed to update category" });
    }
  }

  // Delete a product
  async delete(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const deletedCategory = await CategoryModel.destroy({ where: { id } });
      if (!deletedCategory) {
        return res.status(404).json({ error: "Category not found" });
      }
      return res.status(200).json({ message: `Deleted category` });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Failed to delete category" });
    }
  }
}

export default new CategoryController();
