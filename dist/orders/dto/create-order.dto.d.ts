import { Product } from "src/products/entities/product.entity";
import { User } from "src/users/entities/user.entity";
export declare class CreateOrderDto {
    quantity: number;
    payment_method: string;
    user: User;
    product: Product;
}
