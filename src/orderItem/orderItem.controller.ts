import { Controller, Post, Body, Get, Param, Delete, Put } from '@nestjs/common';
import { OrderItem } from './orderItem.entity';
import { OrderItemService } from './orderItem.service';
import { plainToClass } from 'class-transformer';
//import { StockService } from '../stock/stock.service'

@Controller('orderItem')
export class OrderItemController {

    constructor(private readonly orderItem: OrderItemService) { }

    @Post()
    save(@Body() OrderItem: OrderItem) {
        return this.orderItem.save(OrderItem);
    }

    @Get()
    findAll() {
        return this.orderItem.findAll();
    }

    @Get(":id")
    findById(@Param() id: number) {
        return this.orderItem.findById(id);
    }

    @Delete(":id")
    remove(@Param() id: number) {
        return this.orderItem.delete(id);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() orderItemDto: OrderItem) {
        orderItemDto.id = id;
        const order = plainToClass(OrderItem, orderItemDto);
        return this.orderItem.update(order);
    }

}
