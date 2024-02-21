import { ProductTypesService } from './product_types.service';
import { CreateProductTypeDto } from './dto/create-product_type.dto';
import { UpdateProductTypeDto } from './dto/update-product_type.dto';
export declare class ProductTypesController {
    private readonly productTypesService;
    constructor(productTypesService: ProductTypesService);
    create(createProductTypeDto: CreateProductTypeDto): Promise<import("./entities/product_type.entity").ProductType>;
    findAll(): Promise<import("./entities/product_type.entity").ProductType[]>;
    findOne(id: string): Promise<import("./entities/product_type.entity").ProductType>;
    update(id: string, updateProductTypeDto: UpdateProductTypeDto): Promise<import("./entities/product_type.entity").ProductType>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
