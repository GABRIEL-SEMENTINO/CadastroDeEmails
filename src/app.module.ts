import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScheduleModule } from '@nestjs/schedule';



//Customer
import { CustomerController } from './customer/customer.controller';
import { CustomerService } from './customer/customer.service';
import { Customer } from './customer/customer.entity';

//Order
import { OrderController } from './order/order.controller';
import { OrderService } from './order/order.service';
import { Order } from './order/order.entity';
import { OrderItem } from './orderItem/orderItem.entity';
import { OrderItemController } from './orderItem/orderItem.controller';
import { OrderItemService } from './orderItem/orderItem.service';

//Product
import { ProductService } from './product/product.service';
import { Product } from './product/product.entity';
import { ProductController } from './product/product.controller';

//Stock
import { Stock } from './stock/stock.entity';
import { StockController } from './stock/stock.controller';
import { StockService } from './stock/stock.service';




@Module({
  imports: [ ScheduleModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '123',
      database: 'email',

      //Entidades
      entities: [
        Customer,
        Order,
        Stock,
        OrderItem,
        Product,
      
      ],

      synchronize: true,
      logging: true,

    }),
    //Module
    TypeOrmModule.forFeature([
      Customer,
      Order,
      Stock,
      OrderItem,
      Product,
    

    ])
  ],

  //Controladores
  controllers: [
    CustomerController,
    OrderController,
    ProductController,
    OrderItemController,
    StockController,


  ],
  //Provedores
  providers: [
    CustomerService,
    ProductService,
    OrderItemService,
    OrderService,
    StockService,

  ],
})


export class AppModule {}


