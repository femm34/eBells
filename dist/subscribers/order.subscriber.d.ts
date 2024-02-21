import { Order } from 'src/orders/entities/order.entity';
import { Product } from 'src/products/entities/product.entity';
import { EntitySubscriberInterface, InsertEvent } from 'typeorm';
export declare class OrderSubscriber implements EntitySubscriberInterface<Order> {
    listenTo(): typeof Order;
    beforeInsert(event: InsertEvent<Order>): Promise<Product>;
}
