import {IsInt, IsString, MaxLength, MinLength, IsNumber } from "class-validator";

export class CustomerDto {

    @IsString({ message: 'Não é uma string válida!' })
    @MinLength(1, { message: 'Campo obrigatório.' })
    date: string;


    @IsString({ message: 'Não é uma string válida!' })
    @MaxLength(30, { message: 'O campo deve ter no máximo 30 caracteres.' })
    id: string;
    

    @IsString({ message: 'Não é uma string válida!' })
    @MaxLength(30, { message: 'O campo deve ter no máximo 30 caracteres.' })
    quantity: string;

    
    @IsString({ message: 'Não é uma string válida!' })
    @MaxLength(30, { message: 'O campo deve ter no máximo 30 caracteres.' })
    unitValue: string;


    @IsString({ message: 'Não é uma string válida!' })
    @MaxLength(30, { message: 'O campo deve ter no máximo 30 caracteres.' })
    order: string;

    @IsString({ message: 'Não é uma string válida!' })
    @MaxLength(30, { message: 'O campo deve ter no máximo 30 caracteres.' })
    product: string;

    @IsNumber(null, { message: 'Náo é um número válido!' })
    orderItem: number;

}