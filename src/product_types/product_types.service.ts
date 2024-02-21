import { Injectable } from '@nestjs/common';
import { CreateProductTypeDto } from './dto/create-product_type.dto';
import { UpdateProductTypeDto } from './dto/update-product_type.dto';
import { Repository } from 'typeorm';
import { ProductType } from './entities/product_type.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProductTypesService {
  constructor(
    @InjectRepository(ProductType)
    private productTypeRepository: Repository<ProductType>,
  ) { }
  async create(createProductTypeDto: CreateProductTypeDto) {
    const newProductType = this.productTypeRepository.create(createProductTypeDto)
    return await this.productTypeRepository.save(newProductType)
  }

  async findAll() {
    return await this.productTypeRepository.find()
  }

  async findOne(id: number) {
    return await this.productTypeRepository.findOne({ where: { id: id } })
  }

  async update(id: number, updateProductTypeDto: UpdateProductTypeDto) {
    await this.productTypeRepository.update(id, updateProductTypeDto)
    return await this.productTypeRepository.findOne({ where: { id: id } })
  }

  async remove(id: number) {
    return await this.productTypeRepository.delete(id)
  }
}
