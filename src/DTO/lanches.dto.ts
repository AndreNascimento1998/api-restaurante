import { IsNotEmpty, IsNumber, IsPositive } from "class-validator"

export class LanchesDTO {

    @IsNotEmpty()
    readonly nome: string

    @IsPositive()
    @IsNumber()
    @IsNotEmpty()
    readonly qnt: Number

    @IsPositive()
    @IsNumber()
    @IsNotEmpty()
    readonly valor: Number
}