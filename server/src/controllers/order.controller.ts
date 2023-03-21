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
      const createdOrder = await OrderModel.create({ totalOrderQty, totalOrderValue});
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
      await OrderModel.update({ totalOrderQty, totalOrderValue}, { where: { orderId } });

      return res.status(201).json({ message: 'order created' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Failed to create order" });
    }
  }
}

export default new OrderController();
