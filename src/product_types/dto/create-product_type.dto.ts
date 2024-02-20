import { IsNotEmpty, IsString } from "class-validator";

export class CreateProductTypeDto {
  @IsNotEmpty()
  @IsString()
  product_type_name: string
}
