import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { OrderItem } from './orderitem.entity';
import { InjectRepository } from '@nestjs/typeorm';


@Injectable()
export class OrderItemService {
  

  constructor(
    @InjectRepository(OrderItem)
    private readonly repository: Repository<OrderItem>) {

  }
  save(order: OrderItem) {
    return this.repository.save(order);
  }

  delete(id: number) {
    return this.repository.delete(id);
  }

  findAll() {
    return this.repository.find();
  }

  findById(id: number) {
    return this.repository.findOne(id);

  }

    update(orderItem: OrderItem) {
      return this.repository.update(orderItem.id, orderItem);
  }
}
