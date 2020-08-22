import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { Customer } from "../customer/customer.entity";
import { OrderItem } from "../orderItem/orderItem.entity";
import { OrderDto } from "./order.dto";


@Entity("order")
export class Order {
    static id(id: any, OrderDto: OrderDto) {
        throw new Error("Method not implemented.");
    }

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'code', type: 'varchar', length: '8' })
    code: string;
 
    @Column({ name: 'date', type: 'date' })
    date: Date;

    @Column({ name: 'dataDeEntregaPrevista', type: 'numeric', precision : 10, scale : 2 })
    dataDeEntregaPrevista: number;

    @Column({ name: 'transportadora', type: 'numeric', precision : 10, scale : 2 })
    transportadora: number;

    @Column({ name: 'valorTotal', type: 'numeric', precision : 10, scale : 2 })
    valorTotal: number;

    @Column({ name: 'valorDosProdutos', type: 'numeric', precision : 10, scale : 2 })
    valorTotalDosProdutos: number;

    @Column({ name: 'valorDeDescontos', type: 'numeric', precision : 10, scale : 2 })
    valorDeDescontos: number;

   
    @Column({ name: 'endereçoDeEntrega', type: 'numeric', precision : 10, scale : 2 })
    enderecoDeEntrega: number;


    @ManyToOne(type => Customer, customer => customer.order)
    customer: Customer;

    @OneToMany(type => OrderItem, orderitem => orderitem.order, { cascade: true, eager: true })
    orderItems: OrderItem[];
}