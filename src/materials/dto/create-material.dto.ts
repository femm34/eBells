import { IsNotEmpty, IsString } from "class-validator";

export class CreateMaterialDto {
  @IsNotEmpty()
  @IsString()
  material_name: string;
}

