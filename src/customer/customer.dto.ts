import {IsInt, IsString, MaxLength, MinLength, IsNumber } from "class-validator";


export class CustomerDto {

    //ID de indetificação do Customer
    id: number;
    
    @IsString({ message: 'Não é uma string válida!' })
    @MinLength(1, { message: 'O campo deve ter no mínimo o primeiro nome.' })
    name: string;

    
    @IsString({ message: 'Não é uma string válida!' })
    @MinLength(11, { message: 'O campo deve ter 11 dígitos.' })
    @MaxLength(12, { message: 'O campo deve ter no máximo 11 dígitos.' })
    cpf: string;


    @IsString({ message: 'Não é uma string válida!' })
    @MinLength(8, { message: 'O campo deve mínimo 9 dígitos.' })
    @MaxLength(9, { message: 'O campo deve ter no máximo 9 caracteres.' })
    rg: string;
    

    @IsString({ message: 'Não é uma string válida!' })
    @MaxLength(30, { message: 'O campo deve ter no máximo 30 caracteres.' })
    address: string;

    
    @IsString({ message: 'Não é uma string válida!' })
    @MaxLength(30, { message: 'O campo deve ter no máximo 30 caracteres.' })
    neighborhood: string;


    @IsString({ message: 'Não é uma string válida!' })
    @MaxLength(30, { message: 'O campo deve ter no máximo 30 caracteres.' })
    city: string;

    @IsString({ message: 'Não é um email válido!' })
    @MaxLength(150, { message: 'O campo deve ter no máximo 150 caracteres.' })
    email: string;

    @IsNumber(null, { message: 'Náo é um número válido!' })
    @MaxLength(8, { message: 'O campo deve ter no máximo 30 caracteres.' })
    @MinLength(7, { message: 'O campo deve mínimo 9 dígitos.' })
    cep: string;

}