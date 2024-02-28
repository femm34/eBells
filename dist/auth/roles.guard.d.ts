import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Repository } from 'typeorm';
import { Role } from 'src/roles/entities/role.entity';
export declare class RolesGuard implements CanActivate {
    private reflector;
    private roleRepository;
    constructor(reflector: Reflector, roleRepository: Repository<Role>);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
