import { Entity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne } from "typeorm";
import { OrderItem } from "../orderItem/orderItem.entity";
import { Stock } from "../stock/stock.entity";

@Entity("product")
export class Product {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'name', type: 'varchar' })
  name: string;

  @Column({ name: 'description', type: 'varchar' })
  description: string;

  @Column({ name: 'price', type: 'numeric', precision: 15, scale: 2 })
  price: number;

  @Column({ name: 'dataDeValidade', type: 'numeric', precision: 15, scale: 2 })
  dataDeValidade: number;

  @Column({ name: 'unidadeDeMedida', type: 'numeric', precision: 15, scale: 2 })
  unidadeDeMedida: number;


  @OneToMany(type => OrderItem, orderItem => orderItem.product)
  orderItem: OrderItem;

  @OneToOne(type => Stock, stock => stock.product)
  stock: Stock;

}