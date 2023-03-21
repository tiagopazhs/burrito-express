import { Request, Response } from "express";
import { OrderItemModel, OrderModel, ProductModel } from "../models";

// Find every items of order and exclude it
async function excludeOrderItems(orderId: string) {
    const orderItemsToDelete = await OrderItemModel.findAll({ where: { orderId: orderId } });
    await Promise.all(orderItemsToDelete.map(OrderItemModel => OrderItemModel.destroy()));
}

// add items to order
async function addItemsToOrder(req: Request, res: Response, orderId: string): Promise<void> {
    let totalOrderQty = 0;
    let totalOrderValue = 0;
    const orderItems = req.body.orderItems;
  
    for (let i = 0; i < orderItems.length; i++) {
      const { productId, qty } = orderItems[i];
  
      // Find the product by id
      const product = await ProductModel.findOne({
        where: { id: productId },
      });
  
      if (!product) {
        res.status(404).send({ error: "Product not found" });
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
  
      totalOrderQty += qty;
      totalOrderValue += product.price * qty;
    }
  
    // Update the order
    await OrderModel.update({ totalOrderQty, totalOrderValue }, { where: { orderId } });
  }

export { excludeOrderItems, addItemsToOrder };