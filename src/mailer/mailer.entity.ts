import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm";
import { Product } from "src/product/product.entity";

@Entity("mailer")
export class Mailer {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'email', type: 'varchar', length: '150' })
    email: string;

    @ManyToOne(type => Product, product => product.)
    produtc: Product;



}