import { Injectable } from '@angular/core';
import { products } from '../product-items';
import { Product, CartProduct } from '../types/products';

@Injectable()
export class ProductService {

  constructor() { }

  getAll(): Product[] {
    return products;
  }

  getCategoryItems(id: number): Product[] {
    return products.filter(item => item.categoryId == id);
  }

  createCartProduct(product: Product): CartProduct {
    return {
      ...product,
      qty: 1
    };
  }
}
