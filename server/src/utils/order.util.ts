import { OrderItemModel } from "../models";

// Find every items of order and exclude it
async function excludeOrderItems(orderId: string) {
    const orderItemsToDelete = await OrderItemModel.findAll({ where: { orderId: orderId } });
    await Promise.all(orderItemsToDelete.map(OrderItemModel => OrderItemModel.destroy()));
}

export { excludeOrderItems };