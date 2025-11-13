/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
    private products = [
        { id: 1, name: 'Laptop', price: 999.99 },
        { id: 2, name: 'Smartphone', price: 499.99 },
        { id: 3, name: 'Tablet', price: 299.99 },
    ];

    getAllProducts() {
        return this.products;
    }
    
}
