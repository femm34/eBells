import { IsString, IsNotEmpty } from "class-validator";
export class CreateQuotationDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  cellphone_number: string;

  @IsNotEmpty()
  @IsString()
  client_email: string;

  @IsNotEmpty()
  @IsString()
  message: string;
}
