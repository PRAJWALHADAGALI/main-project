import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Product, CartProduct } from '../types/products';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartUpdates = new Subject<string>();
  public cartUpdates$ = this.cartUpdates.asObservable();
  public cartItems: CartProduct[] = [];

  private baseUrl: string = 'http://localhost:3000';

  public get count(): number {
    return this.cartItems.reduce((c, t) => c + t.qty, 0);
  }

  constructor(private http: HttpClient, private productService: ProductService) { }

  add(product: Product) {
    let existingItem: CartProduct | undefined = this.cartItems.find(item => item.id === product.id);
    if (existingItem) {
      existingItem.qty++;
    } else {
      const newCartItem: CartProduct = { ...product, qty: 1 };
      this.cartItems.push(newCartItem);
    }
    this.cartUpdates.next('Cart updated');
    this.updateProductQty(product.id, 1);
  }

  updateProductQty(id: number, qty: number): void {
    this.productService.getProductQty(id).subscribe(
      currentQty => {
        if (currentQty > 0) {
          this.deleteProductQty(id, qty).subscribe(
            () => console.log(`Successfully updated quantity for product ID: ${id}`),
            error => console.error(`Error updating quantity for product ID: ${id}`, error)
          );
        } else {
          console.error(`Product ID ${id} has no stock.`);
        }
      },
      error => console.error(`Error fetching quantity for product ID: ${id}`, error)
    );
  }

  deleteProductQty(id: number, qty: number): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/products/delete-qty/${id}?qty=${qty}`, {});
  }

  getItems() {
    return this.cartItems;
  }
}
