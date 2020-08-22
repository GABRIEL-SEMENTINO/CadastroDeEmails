import { Controller, Post, Body, Get, Param, Delete, Put } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from "./product.entity";
import { ProductDto } from './product.dto';
import { plainToClass } from 'class-transformer';

@Controller('product')
export class ProductController {
  product: any;

  constructor(private readonly service: ProductService) { }

  @Post()
  save(@Body() product: Product) {
    console.log(product);
    return this.service.save(product);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(":id")
  findById(@Param() id: number) {
    return this.service.findById(id);
  }

  @Delete(":id")
  remove(@Param() id: number) {
    return this.remove(id);
  }

  @Put(':id')
    update(@Param('id') id: number, @Body() productDto: ProductDto) {

        productDto.id = id;
        const customer = plainToClass(Product, productDto);
        return this.product.update(this.product);

  }
}
