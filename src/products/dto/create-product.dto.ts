import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";
import { Material } from "src/materials/entities/material.entity";
import { ProductType } from "src/product_types/entities/product_type.entity";

export class CreateProductDto {
  @IsNotEmpty()
  @IsString()
  product_name: string;

  @IsNotEmpty()
  @IsNumber()
  price: number;

  @IsNotEmpty()
  @IsNumber()
  stock: number;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsOptional()
  @IsString()
  material: Material;

  @IsNotEmpty()
  @IsString()
  image_path: string;

  @IsOptional()
  product_type_id: ProductType;
}