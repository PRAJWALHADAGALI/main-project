import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Product, CartProduct } from '../types/products';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})

// export class CartListComponent implements OnInit {
//   cartItems: Product[] = [];
//
//   constructor(private cartService: CartService) { }
//
//   ngOnInit() {
//
//     this.cartItems = this.cartService.getItems();
//
//     console.log('Cart Items:', this.cartItems);
//   }
// }
export class CartListComponent implements OnInit {
  count: number = 0;
  isOpen: boolean = false;
  previewFlag: boolean = false;
  inVoiceNo: number;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.cartUpdates$.subscribe(() => {
      this.count = this.cartService.count;
    });
  }

  openCart(): void {
    this.isOpen = true;
  }

  closeCart(): void {
    this.isOpen = false;
    this.previewFlag = false;
  }

  removeProduct(item: CartProduct): void {
    const itemIndex = this.cartService.cartItems.findIndex((element) => item.id === element.id);
    if (itemIndex !== -1) {
      this.cartService.cartItems.splice(itemIndex, 1);
      this.count = this.cartService.count;
    }
  }

  chngQuantity(): void {
    this.count = this.cartService.count;
  }

  preview(): void {
    this.previewFlag = true;
    this.inVoiceNo = this.getRandomInt(23443, 23432555);
  }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
