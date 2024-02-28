import { ProductType } from "src/product_types/entities/product_type.entity";
export declare class CreateProductDto {
    product_name: string;
    price: number;
    stock: number;
    description: string;
    material: string;
    image_path: string;
    product_type_id: ProductType;
}
