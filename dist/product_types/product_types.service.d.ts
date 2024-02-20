import { CreateProductTypeDto } from './dto/create-product_type.dto';
import { UpdateProductTypeDto } from './dto/update-product_type.dto';
export declare class ProductTypesService {
    create(createProductTypeDto: CreateProductTypeDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateProductTypeDto: UpdateProductTypeDto): string;
    remove(id: number): string;
}
