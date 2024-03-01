import { Injectable } from '@nestjs/common';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Address } from './entities/address.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AddressesService {
  constructor(
    @InjectRepository(Address)
    private addressRepository: Repository<Address>,
  ) { }

  async create(createAddressDto: CreateAddressDto) {
    const newAddress = this.addressRepository.create(createAddressDto)
    return await this.addressRepository.save(newAddress);
  }

  async findAll() {
    return await this.addressRepository.find({ relations: ['user'] })
  }

  async findOne(id: number) {
    return await this.addressRepository.findOne({ where: { id: id }, relations: ['user'] })
  }

  async update(id: number, updateAddressDto: UpdateAddressDto) {
    await this.addressRepository.update(id, updateAddressDto)
    return await this.addressRepository.findOne({ where: { id: id }, relations: ['user'] })
  }

  async remove(id: number) {
    return await this.addressRepository.delete(id)
  }
}
