import { Request, Response } from "express";
import { ProductModel } from "../models"

class ProductController {

    // CRUD Operations
    // Create a new product
    async create(req: Request, res: Response): Promise<Response> {
        try {
            const { id, name, description, price, category, imageURL } = req.body;
            const createdProduct = await ProductModel.create({ id, name, description, price, category, imageURL });
            return res.status(201).json(createdProduct);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Failed to create product' });
        }
    }

    // Read all products
    async getAll(req: Request, res: Response): Promise<Response> {
        try {
            const products = await ProductModel.findAll();
            return res.status(200).json(products);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Failed to get products' });
        }
    }

    // Read product by ID
    async getById(req: Request, res: Response): Promise<Response> {
        try {
            const { id } = req.params;
            const product = await ProductModel.findByPk(id);
            if (!product) {
                return res.status(404).json({ error: 'Product not found' });
            }
            return res.status(200).json(product);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Failed to get product by id' });
        }
    }

    // Update a product
    async update(req: Request, res: Response): Promise<Response> {
        try {
            const updatedProduct = await ProductModel.update(req.body, { where: { id: req.params.id } });
            if (!updatedProduct) {
                return res.status(404).json({ error: 'Product not found' });
            }
            return res.status(200).json(req.body);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Failed to update product' });
        }
    }

    // Delete a product
    async delete(req: Request, res: Response): Promise<Response> {
        try {
            const { id } = req.params;
            const deletedProduct = await ProductModel.destroy({ where: { id } });
            if (!deletedProduct) {
                return res.status(404).json({ error: 'Product not found' });
            }
            return res.status(200).json({ message: `Deleted product` });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Failed to delete product' });
        }
    }

}

export default new ProductController();
