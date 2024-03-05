import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { User } from "src/users/entities/user.entity";

export class CreateCardDto {
  @IsNotEmpty()
  @IsNumber()
  card_number: number;

  @IsNotEmpty()
  @IsString()
  expiration: string;

  @IsNotEmpty()
  @IsString()
  type_card: string;

  @IsNotEmpty()
  @IsString()
  cardholder: string;

  @IsNotEmpty()
  @IsNumber()
  user_id: User;
  // user id
}
