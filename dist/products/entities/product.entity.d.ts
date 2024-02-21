import { Order } from "src/orders/entities/order.entity";
import { ProductType } from "src/product_types/entities/product_type.entity";
export declare class Product {
    constructor();
    id: number;
    product_name: string;
    price: number;
    stock: number;
    description: string;
    product_type_id: ProductType;
    orders: Order[];
}
