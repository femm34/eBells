import { Injectable } from '@nestjs/common';
import { CreateMaterialDto } from './dto/create-material.dto';
import { UpdateMaterialDto } from './dto/update-material.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Material } from './entities/material.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MaterialsService {
  constructor(
    @InjectRepository(Material)
    private materialRepository: Repository<Material>,
  ) { }

  async create(createMaterialDto: CreateMaterialDto) {
    const newMaterial = this.materialRepository.create(createMaterialDto);
    return await this.materialRepository.save(newMaterial);
  }

  async findAll() {
    return await this.materialRepository.find()
  }

  async findOne(id: number) {
    return await this.materialRepository.findOne({ where: { id: id } })
  }

  async update(id: number, updateMaterialDto: UpdateMaterialDto) {
    await this.materialRepository.update(id, updateMaterialDto)
    return await this.materialRepository.findOne({ where: { id: id } })
  }

  async remove(id: number) {
    return await this.materialRepository.delete(id)
  }
}
