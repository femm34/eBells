import { Injectable } from '@nestjs/common';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { Service } from './entities/service.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ServicesService {
  constructor(
    @InjectRepository(Service)
    private serviceRepository: Repository<Service>,
  ) { }
  async create(createServiceDto: CreateServiceDto) {
    const newService = this.serviceRepository.create(createServiceDto)
    return await this.serviceRepository.save(newService);
  }

  async findAll() {
    return await this.serviceRepository.find()
  }

  async findOne(id: number) {
    return await this.serviceRepository.findOne({ where: { id: id } })
  }

  async update(id: number, updateServiceDto: UpdateServiceDto) {
    await this.serviceRepository.update(id, updateServiceDto)
    return await this.serviceRepository.findOne({ where: { id: id } })
  }

  async remove(id: number) {
    return await this.serviceRepository.delete(id)
  }
}
