import { Product } from "src/products/entities/product.entity";
import { User } from "src/users/entities/user.entity";
export declare class CreateOrderDto {
    quantity: number;
    user: User;
    product: Product;
}
