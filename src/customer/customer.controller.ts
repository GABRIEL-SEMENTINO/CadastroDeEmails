import { Controller, Post, Body, Get, Param, Delete, Put } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { Customer } from './customer.entity';
import { CustomerDto } from './customer.dto';
import { plainToClass } from 'class-transformer';


@Controller('customer')
export class CustomerController {

    constructor(private readonly service: CustomerService) { }

    @Post()
    save(@Body() customerDto: CustomerDto) { 
        const customer = plainToClass(Customer, customerDto);
        return this.service.save(customer);
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
        return this.service.delete(id);

    }


    @Put(':id')
    update(@Param('id') id: number, @Body() customerDto: CustomerDto) {

        customerDto.id = id;
        const customer = plainToClass(Customer, customerDto);
        return this.service.update(customer);
        
    }

}
