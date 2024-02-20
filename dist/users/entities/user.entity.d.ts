import { Order } from 'src/orders/entities/order.entity';
import { Role } from 'src/roles/entities/role.entity';
export declare class User {
    id: number;
    full_name: string;
    email: string;
    username: string;
    password: string;
    address: string;
    role: Role;
    orders: Order[];
    constructor();
}
