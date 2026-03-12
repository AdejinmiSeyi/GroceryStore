import { IsString, IsInt, IsOptional } from "class-validator";

export class UpdateProductDto{
    @IsOptional()
    @IsString()
    name?: string;

    @IsOptional()
    @IsInt()
    price?: number;

    @IsOptional()
    @IsString()
    description?: string;
}