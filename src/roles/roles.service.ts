import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { Role } from './entities/role.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(Role)
    private roleRepository: Repository<Role>,
  ) { }

  async create(createRoleDto: CreateRoleDto) {
    const role = this.roleRepository.create(createRoleDto)
    return await this.roleRepository.save(role);

  }

  async findAll() {
    return await this.roleRepository.find()
  }

  async findOne(id: number) {
    return await this.roleRepository.findOne({ where: { id: id } })
  }

  async update(id: number, updateRoleDto: UpdateRoleDto) {
    await this.roleRepository.update(id, updateRoleDto)
    return await this.roleRepository.findOne({ where: { id: id } })
  }

  async remove(id: number) {
    return await this.roleRepository.delete(id)
  }
}
