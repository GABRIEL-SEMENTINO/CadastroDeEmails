import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Order } from "../order/order.entity";

@Entity("customer")
export class Customer {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'name', type: 'varchar', length: '80' })
    name: string;

    @Column({ name: 'cpf', type: 'varchar', length: '40' })
    cpf: string;

    @Column({ name: 'rg', type: 'varchar', length: '40' })
    rg: string;

    @Column({ name: 'email', type: 'varchar', length: '150' })
    email: string;

    @Column({ name: 'address', type: 'varchar', length: '40' })
    address: string;

    @Column({ name: 'neighborhood', type: 'varchar', length: '40' })
    neighborhood: string;

    @Column({ name: 'city', type: 'varchar', length: '40' })
    city: string;

    @Column({ name: 'cep', type: 'varchar', length: '40' })
    cep: string;

    @OneToMany(type => Order, order => order.customer)
    order: Order;

}