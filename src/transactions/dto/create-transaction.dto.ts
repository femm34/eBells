import { IsNotEmpty, IsString } from 'class-validator';
export class CreateTransactionDto {
  @IsNotEmpty()
  @IsString()
  date: string;


  @IsNotEmpty()
  @IsString()
  payment_method: string;
}



