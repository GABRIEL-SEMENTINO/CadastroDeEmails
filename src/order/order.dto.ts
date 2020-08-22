import {IsInt, IsString, MaxLength, MinLength, IsNumber } from "class-validator";

export class OrderDto {

    id: number; 
    
    @IsString({ message: 'Não é uma string válida!' })
    @MinLength(1, { message: 'O campo deve ter a data da ordem.' })
    date: string;


    @IsString({ message: 'Não é uma string válida!' })
    @MaxLength(30, { message: 'O campo deve ter no máximo 30 caracteres.' })
    transportadora: string;
    

    @IsString({ message: 'Não é uma string válida!' })
    @MaxLength(30, { message: 'O campo deve ter no máximo 30 caracteres.' })
    valorTotal: string;

    
    @IsString({ message: 'Não é uma string válida!' })
    @MaxLength(30, { message: 'O campo deve ter no máximo 30 caracteres.' })
    valorTotalDosProdutos: string;


    @IsString({ message: 'Não é uma string válida!' })
    @MaxLength(30, { message: 'O campo deve ter no máximo 30 caracteres.' })
    ValorDeDescontos: string;

    @IsString({ message: 'Não é uma string válida!' })
    @MaxLength(30, { message: 'O campo deve ter no máximo 30 caracteres.' })
    endereçoDeEntrega: string;

    @IsString({ message: 'Não é uma string válida!' })
    @MaxLength(30, { message: 'O campo deve ter no máximo 30 caracteres.' })
    customer: string;

    @IsNumber(null, { message: 'Náo é um número válido!' })
    orderItem: number;

}