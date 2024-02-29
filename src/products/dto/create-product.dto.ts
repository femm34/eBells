import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";
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

  @IsNotEmpty()
  @IsString()
  material: string;

  @IsNotEmpty()
  @IsString()
  image_path: string;

  @IsOptional()
  product_type_id: ProductType;
}



// import { ApiProperty } from '@nestjs/swagger';
// import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
// // import { File } from 'src/common/interfaces/file.interface';

// export class CreateProductDto {
//   @IsNotEmpty()
//   @IsString()
//   @ApiProperty({ type: 'string', format: 'binary' })
//   image: File;

//   @IsNotEmpty()
//   @IsString()
//   @ApiProperty()
//   product_name: string;

//   @IsNotEmpty()
//   @IsNumber()
//   @ApiProperty()
//   price: number;

//   @IsNotEmpty()
//   @IsNumber()
//   @ApiProperty()
//   stock: number;

//   @IsNotEmpty()
//   @IsString()
//   @ApiProperty()
//   description: string;

//   @IsNotEmpty()
//   @IsString()
//   @ApiProperty()
//   material: string;

//   @IsOptional()
//   @ApiProperty({ type: 'string', format: 'binary' })
//   product_type_id?: File;
// }
