import { IsString, IsInt } from "class-validator";

export class UpdateProductDto{
  
    @IsString()
    name?: string;

    @IsInt()
    price?: number;

    @IsString()
    description?: string;
}