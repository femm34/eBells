import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { User } from "src/users/entities/user.entity";

export class CreateAddressDto {
  @IsNotEmpty()
  @IsString()
  recipient_name: string;

  @IsNotEmpty()
  @IsString()
  state: string;

  @IsNotEmpty()
  @IsString()
  city: string;

  @IsNotEmpty()
  @IsString()
  neighborhood: string;

  @IsNotEmpty()
  @IsString()
  street: string;

  @IsNotEmpty()
  @IsString()
  apartment_number: string;

  @IsNotEmpty()
  @IsNumber()
  phone_number: number;

  @IsNotEmpty()
  @IsNumber()
  postal_code: number;

  @IsNotEmpty()
  @IsNumber()
  additional_contact_number: number;

  @IsNotEmpty()
  @IsString()
  landmarks: string;

  @IsNotEmpty()
  @IsNumber()
  user: User;
}
