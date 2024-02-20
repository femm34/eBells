import { User } from 'src/users/entities/user.entity';
export declare class Role {
    id: number;
    role_name: string;
    permissions_number: number;
    users: User[];
}
