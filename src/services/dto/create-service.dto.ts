import { IsNotEmpty, IsString } from 'class-validator';
export class CreateServiceDto {
  @IsNotEmpty()
  @IsString()
  service_name: string;

  @IsNotEmpty()
  @IsString()
  service_description: string;

  @IsNotEmpty()
  @IsString()
  service_image_url: string;
}
