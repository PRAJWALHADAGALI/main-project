import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Product, CartProduct } from '../types/products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartUpdates = new Subject<string>();
  public cartUpdates$ = this.cartUpdates.asObservable();
  public cartItems: CartProduct[] = [];

  public get count(): number {
    return this.cartItems.reduce((c, t) => c + t.qty, 0);
  }

  constructor() { }

  // Add a product to the cart
  add(product: Product) {
    let existingItem: CartProduct | undefined = this.cartItems.find(item => item.id === product.id);
    if (existingItem) {
      existingItem.qty++;
    } else {
      const newCartItem: CartProduct = { ...product, qty: 1 };
      this.cartItems.push(newCartItem);
    }
    this.cartUpdates.next('Cart updated');
  }

  // Get all cart items
  getItems() {
    return this.cartItems;
  }
}
