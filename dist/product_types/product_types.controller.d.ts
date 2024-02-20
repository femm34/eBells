import { ProductTypesService } from './product_types.service';
import { CreateProductTypeDto } from './dto/create-product_type.dto';
import { UpdateProductTypeDto } from './dto/update-product_type.dto';
export declare class ProductTypesController {
    private readonly productTypesService;
    constructor(productTypesService: ProductTypesService);
    create(createProductTypeDto: CreateProductTypeDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateProductTypeDto: UpdateProductTypeDto): string;
    remove(id: string): string;
}
