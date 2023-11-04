// cart.service.ts
import { Injectable } from '@angular/core';
import { Product, CartProduct } from '../types/products';
import { Subject } from 'rxjs';

@Injectable()
export class CartService {

  private cartUpdates = new Subject<string>();
  public cartUpdates$ = this.cartUpdates.asObservable();
  public cartItems: CartProduct[] = [];

  public get count(): number {
    return this.cartItems.reduce((c, t) => c + t.qty, 0);
  }

  constructor() { }
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

getItems(){
  return this.cartItems;

}



  //
  // addToCart(product: Product) {
  //     this.cartItems.push(product);
  //   }
  //   getItems() {
  //   return this.cartItems;
  //   console.log("Item returned");
  // }
  // clearCart() {
  //   this.cartItems = [];
  //   return this.cartItems;
  // }


}
