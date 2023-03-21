import { Request, Response } from "express";
import { OrderItemModel, OrderModel, ProductModel } from "../models";

class OrderController {

  // CRUD Operations
  // Create a new order
  async create(req: Request, res: Response): Promise<Response> {
    try {
      // Create an empty order
      let totalOrderQty = 0
      let totalOrderValue = 0
      const createdOrder = await OrderModel.create({ totalOrderQty, totalOrderValue });
      const orderId = createdOrder.getDataValue("orderId");

      // Add items to the order
      const orderItems = req.body.orderItems;

      for (let i = 0; i < orderItems.length; i++) {
        const { productId, qty } = orderItems[i];

        // Find the product by id
        const product = await ProductModel.findOne({
          where: { id: productId },
        });

        if (!product) {
          return res.status(404).json({ error: "Product not found" });
        }

        // Add the item to the order
        await OrderItemModel.create({
          keyOrderId: `BE${orderId.toString().padStart(3, '0')}P${(i + 1).toString().padStart(2, '0')}`,
          orderId,
          itemOrder: i + 1,
          itemName: product.name,
          itemQty: qty,
          itemValue: product.price,
          totalItemValue: product.price * qty,
        });

        totalOrderQty = totalOrderQty + qty
        totalOrderValue = totalOrderValue + product.price * qty
      }

      // Uptate the order
      await OrderModel.update({ totalOrderQty, totalOrderValue }, { where: { orderId } });

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
      let totalOrderQty = 0
      let totalOrderValue = 0

      // Find every items of order and exclude it
      const orderItemsToDelete = await OrderItemModel.findAll({ where: { orderId: orderId } });
      await Promise.all(orderItemsToDelete.map(OrderItemModel => OrderItemModel.destroy()));

      // Add items to the order 
      const orderItems = req.body.orderItems;

      for (let i = 0; i < orderItems.length; i++) {
        const { productId, qty } = orderItems[i];

        // Find the product by id
        const product = await ProductModel.findOne({
          where: { id: productId },
        });

        if (!product) {
          return res.status(404).json({ error: "Product not found" });
        }

        // Add the item to the order
        await OrderItemModel.create({
          keyOrderId: `BE${orderId.toString().padStart(3, '0')}P${(i + 1).toString().padStart(2, '0')}`,
          orderId,
          itemOrder: i + 1,
          itemName: product.name,
          itemQty: qty,
          itemValue: product.price,
          totalItemValue: product.price * qty,
        });

        totalOrderQty = totalOrderQty + qty
        totalOrderValue = totalOrderValue + product.price * qty
      }

      // Uptate the order
      await OrderModel.update({ totalOrderQty, totalOrderValue }, { where: { orderId } });

      return res.status(201).json({ message: 'order updated' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Failed to create order" });
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
      
      // Find every items of order and exclude it
      const orderItemsToDelete = await OrderItemModel.findAll({ where: { orderId: id } });
      await Promise.all(orderItemsToDelete.map(OrderItemModel => OrderItemModel.destroy()));
      
      return res.status(200).json({ message: `Deleted order` });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Failed to delete order" });
    }
  }
}

export default new OrderController();
