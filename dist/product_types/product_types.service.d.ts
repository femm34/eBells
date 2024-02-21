import { CreateProductTypeDto } from './dto/create-product_type.dto';
import { UpdateProductTypeDto } from './dto/update-product_type.dto';
import { Repository } from 'typeorm';
import { ProductType } from './entities/product_type.entity';
export declare class ProductTypesService {
    private productTypeRepository;
    constructor(productTypeRepository: Repository<ProductType>);
    create(createProductTypeDto: CreateProductTypeDto): Promise<ProductType>;
    findAll(): Promise<ProductType[]>;
    findOne(id: number): Promise<ProductType>;
    update(id: number, updateProductTypeDto: UpdateProductTypeDto): Promise<ProductType>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
