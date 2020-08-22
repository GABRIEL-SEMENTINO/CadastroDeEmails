import { Entity, PrimaryGeneratedColumn, Column,  OneToMany, ManyToOne } from "typeorm";
import { Order } from "../order/order.entity";
import { Product } from "../product/product.entity";


@Entity("orderitem")
export class OrderItem {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'quantity', type: 'integer' })
    quantity: number;

    @Column({ name: 'unitValue', type: 'numeric', precision : 10, scale : 2 })
    unitValue: number;

    @Column({ name: 'totalValue', type: 'numeric', precision : 10, scale : 2 })
    totalValue: number;

    @ManyToOne (type => Order, order => order.orderItems)
    order: Order;

    @ManyToOne (type => Product, product => product.orderItem)
    product: Product;


}