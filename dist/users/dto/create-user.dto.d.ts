import { Role } from 'src/roles/entities/role.entity';
export declare class CreateUserDto {
    full_name: string;
    email: string;
    username: string;
    password: string;
    address: string;
    role: Role;
}
