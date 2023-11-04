import { Component, OnInit } from '@angular/core';
import { ProductService } from "../services/product.service";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Product, CartProduct } from '../types/products';
import { CartService } from '../services/cart.service';
import { CartListComponent } from "../cart-list/cart-list.component";

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})

// export class ProductsListComponent implements OnInit {
//   selectedCatList: Product[];
//
//   constructor(private route: ActivatedRoute,
//     private router: Router,
//     private productService: ProductService,
//     private cartService: CartService) {
//   }
//
//   ngOnInit() {
//     let id = this.route.snapshot.paramMap.get('id');
//     this.selectedCatList = this.productService.getCategoryItems(parseInt(id));
//   }
//
//   private addToCart(product: Product): void {
//     this.cartService.addToCart(product);
//   }
// }

export class ProductsListComponent implements OnInit {
  selectedCatList: Product[];

  constructor(private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    private cartService: CartService,
    private cartListComponent:CartListComponent) {
  }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.selectedCatList = this.productService.getCategoryItems(parseInt(id));
  }

  private addToCart(product: Product): void {
    this.cartService.add(product);
    this.cartListComponent.isEmpty=false;
  }
}
