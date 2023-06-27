import { IsNotEmpty, IsNumber, IsPositive, MaxLength, Validate } from "class-validator"

export class LanchesDTO {

    @MaxLength(100)
    @IsNotEmpty()
    readonly nome: string

    @IsNotEmpty()
    readonly url: string

    readonly descricao: string

    @IsNumber()
    @IsNotEmpty()
    readonly qnt: Number

    @IsPositive()
    @IsNumber()
    @IsNotEmpty()
    readonly valor: Number
}