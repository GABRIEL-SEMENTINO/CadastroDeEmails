import { StockService } from '../stock/stock.service';
import { Controller, Get, Param } from '@nestjs/common';

@Controller("stock")
export class StockController {

  constructor(private readonly service: StockService) { }

  @Get(":id")
  findById(@Param() id: number) {
    return this.service.findById(id);
  }

  async update(productId: number) {
    const stock = await this.findById(productId);
    stock.stockQuantity =- 1;
    return this.service.update(stock.id, stock.stockQuantity);
  }

}

