import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Customer } from './customer.entity';


@Injectable()
    export class CustomerService {
    remove(id: number) {
        throw new Error("Method not implemented.");
    }
    
    constructor(
        @InjectRepository(Customer)
        private readonly repository: Repository<Customer>) {

    }
    save(customer: Customer) {
        return this.repository.save(customer);
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

    update(customer: Customer) {
        return this.repository.update(customer.id, customer);

     
    }

}
    
