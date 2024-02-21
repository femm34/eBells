import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator"
import { Product } from "src/products/entities/product.entity"
import { User } from "src/users/entities/user.entity"

export class CreateOrderDto {
  @IsNotEmpty()
  @IsNumber()
  quantity: number

  @IsNotEmpty()
  @IsString()
  payment_method: string

  @IsOptional()
  user: User

  @IsOptional()
  product: Product
}
