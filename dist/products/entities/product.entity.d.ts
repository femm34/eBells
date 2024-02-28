import { Order } from "src/orders/entities/order.entity";
import { ProductType } from "src/product_types/entities/product_type.entity";
export declare class Product {
    id: number;
    product_name: string;
    price: number;
    stock: number;
    description: string;
    material: string;
    image_path: string;
    product_type_id: ProductType;
    orders: Order[];
}
