import { IsInt, IsString, MaxLength, MinLength, IsNumber } from "class-validator";
import { Optional } from "@nestjs/common";

export class ProductDto {

  id: number;

  @IsString({ message: 'Não é uma string válida!' })
  @MinLength(10, { message: 'O campo deve ter no mínimo 10 caracteres.' })
  @MaxLength(30, { message: 'O campo deve ter no máximo 30 caracteres.' })
  name: string;

  @Optional()
  @IsString({ message: 'Não é uma string válida!' })
  @MaxLength(100, { message: 'O campo deve ter no máximo 100 caracteres.' })
  description: string;


  @IsString({ message: 'Não é uma string válida!' })
  @MaxLength(30, { message: 'O campo deve ter no máximo 30 caracteres.' })
  price: string;


  @IsString({ message: 'Não é uma string válida!' })
  @MaxLength(30, { message: 'O campo deve ter no máximo 30 caracteres.' })
  dataDeValidade: string;

  @IsString({ message: 'Não é uma string válida!' })
  @MaxLength(30, { message: 'O campo deve ter no máximo 30 caracteres.' })
  unidadeDeMedida: string;

  @IsNumber(null, { message: 'Náo é um número válido!' })
  stock: number;


}