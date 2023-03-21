import { Request, Response } from "express";
import { OrderModel } from "../models";
import { excludeOrderItems, addItemsToOrder } from "../utils";

class OrderController {

  // CRUD Operations
  // Create a new order
  async create(req: Request, res: Response): Promise<Response> {
    try {
      // Create an empty order
      const createdOrder = await OrderModel.create({ totalOrderQty: 0, totalOrderValue: 0 });
      const orderId = createdOrder.getDataValue("orderId");
  
      await addItemsToOrder(req, res, orderId);
  
      return res.status(201).json({ message: 'order created' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Failed to create order" });
    }
  }

  // Read all orders
  async getAll(req: Request, res: Response): Promise<Response> {
    try {
      const orders = await OrderModel.findAll();
      return res.status(200).json(orders);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Failed to get orders" });
    }
  }

  // Read order by ID
  async getById(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const order = await OrderModel.findByPk(id);
      if (!order) {
        return res.status(404).json({ error: "Order not found" });
      }
      return res.status(200).json(order);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Failed to get order by id" });
    }
  }

  // Update a order
  async update(req: Request, res: Response): Promise<Response> {
    try {
      const orderId = req.params.id;
  
      await excludeOrderItems(orderId);
  
      await addItemsToOrder(req, res, orderId);
  
      return res.status(201).json({ message: 'order updated' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Failed to update order" });
    }
  }

  // Delete an order
  async delete(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const deletedOrder = await OrderModel.destroy({ where: { orderId: id } });
      if (!deletedOrder) {
        return res.status(404).json({ error: "Order not found" });
      }

      await excludeOrderItems(id)

      return res.status(200).json({ message: `Deleted order` });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Failed to delete order" });
    }
  }
}

export default new OrderController();
