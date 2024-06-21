import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product, CartProduct } from '../types/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = 'http://localhost:3000'; // Adjust the URL as necessary

  constructor(private http: HttpClient) { }

  // Fetch all products from the backend
  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}/products`);
  }

  // Fetch products by category ID from the backend
  getCategoryItems(id: number): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}/products/category/${id}`);
  }

  // Create a CartProduct from a Product
  createCartProduct(product: Product): CartProduct {
    return {
      ...product,
      qty: 1
    };
  }
}
