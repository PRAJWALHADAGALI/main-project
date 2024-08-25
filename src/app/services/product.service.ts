import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product, CartProduct } from '../types/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}/products`);
  }

  getCategoryItems(id: number): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}/products/category/${id}`);
  }
  getProductQty(id: number): Observable<number> {
  return this.http.get<Array<{ qty: number }>>(`${this.baseUrl}/products/get-qty/${id}`)
    .pipe(
      map(responseArray => { 
        return responseArray.length > 0 ? responseArray[0].qty : 0;  // Access the first item in the array
      })
    );
}




  createCartProduct(product: Product): CartProduct {
    return {
      ...product,
      qty: 1
    };
  }
}
