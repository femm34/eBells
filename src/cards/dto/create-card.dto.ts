import { IsNotEmpty, IsNumber, IsString } from "class-validator";

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

  // user id
}
