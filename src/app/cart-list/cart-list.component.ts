import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Product, CartProduct } from '../types/products';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {
  cartItems: CartProduct[] = [];
  isEmpty: boolean = false;
  totalCost:number=null;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartItems = this.cartService.getItems();
    for (let i = 0; i < this.cartItems.length; i++) {
    this.totalCost = this.totalCost+this.cartItems[i].qty * this.cartItems[i].price;

    }
    if(this.cartItems.length>0){
      this.isEmpty=true;
    }
  }

}
