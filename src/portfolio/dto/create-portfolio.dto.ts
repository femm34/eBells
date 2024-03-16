import { IsNotEmpty, IsString } from "class-validator"

export class CreatePortfolioDto {
  @IsString()
  @IsNotEmpty()
  work_name: string

  @IsString()
  @IsNotEmpty()
  work_image_url: string
}
