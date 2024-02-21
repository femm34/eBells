import { Order } from 'src/orders/entities/order.entity';
import { Product } from 'src/products/entities/product.entity';
import { EntitySubscriberInterface, EventSubscriber, InsertEvent } from 'typeorm';

@EventSubscriber()
export class OrderSubscriber implements EntitySubscriberInterface<Order> {
  listenTo() {
    return Order;
  }

  async beforeInsert(event: InsertEvent<Order>) {
    const { entity, manager } = event;
    const productFound = await manager.getRepository(Product).findOne({ where: { id: entity.product.id } });

    if (productFound.stock < entity.quantity) {
      throw new Error(`Not stock enough by ${productFound.product_name} product`);
    }
    productFound.stock -= entity.quantity;
    return await manager.getRepository(Product).save(productFound);
  }
}
