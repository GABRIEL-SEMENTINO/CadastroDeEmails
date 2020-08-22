import { Injectable, Post } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Product } from './product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { MailerController } from 'src/mailer/mailer.controller'
import { Mailer } from 'src/mailer/mailer.entity';

@Injectable()
export class ProductService {
  private readonly mailerService = new this.mailerService();
  private readonly mailerController = new MailerController(this.mailerService)

  constructor(
    @InjectRepository(Product)
    private readonly repository: Repository<Product>) {

  }
  save(product: Product) {
    const newProduct = this.repository.save(product);
    this.mailerController.printMessage();
    return this.repository.save(product);



  }

  findAll() {
    return this.repository.find();
  }

  findById(id: number) {
    return this.repository.findOne(id);

  }

  update(product: Product) {
  return this.repository.update(product.id, product);
  }
}
