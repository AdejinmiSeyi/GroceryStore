import { IsString } from "class-validator";

export class deleteProductDto {
    @IsString()
    id: string;

}