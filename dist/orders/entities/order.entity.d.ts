import { Product } from "src/products/entities/product.entity";
import { User } from "src/users/entities/user.entity";
export declare class Order {
    id: number;
    quantity: number;
    payment_method: string;
    created_at: Date;
    updated_at: Date;
    user: User;
    product: Product;
}
