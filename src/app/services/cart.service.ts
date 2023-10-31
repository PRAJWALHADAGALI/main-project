// cart.service.ts
import { Injectable } from '@angular/core';
import { Product, CartProduct } from '../types/products';
import { Subject } from 'rxjs';

@Injectable()
export class CartService {

  private cartUpdates = new Subject<void>();
  public cartUpdates$ = this.cartUpdates.asObservable();
  public cartItems: CartProduct[] = [];

  public get count(): number {
    return this.cartItems.reduce((c, t) => c + t.qty, 0);
  }

  constructor() {}
  add(product: Product) {
    let existingItem:CartProduct = this.cartItems.find(item => item.id === product.id) as CartProduct;
    if(existingItem){ existingItem.qty ++ } else {
      (product as CartProduct).qty = 1;
      this.cartItems.push(existingItem)
    }
    this.cartUpdates.next();
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
