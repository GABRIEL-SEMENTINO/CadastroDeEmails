import { Controller, Post, Body, Get, Param, Delete, Put } from '@nestjs/common';
import { OrderService } from './order.service';
import { Order } from './order.entity';
import { OrderDto } from './order.dto';
import { plainToClass } from 'class-transformer';

@Controller('order')
export class OrderController {
    service: any;

    constructor(private readonly order: OrderService) { }

    @Post()
    save(@Body() order: Order) {
        return this.order.save(order);
    }

    @Get()
    findAll() {
        return this.order.findAll();
    }

    @Get(":id")
    findById(@Param() id: number) {
        return this.order.findById(id);
    }

    @Delete(":id")
    remove(@Param() id: number) {
        return this.remove(id);

    } 
        
    @Put(':id')
    update(@Param('id') id: number, @Body() orderDto: OrderDto) {
        orderDto.id = id;
        const order = plainToClass(Order, orderDto);
        return this.service.update(order);
        
    }

}