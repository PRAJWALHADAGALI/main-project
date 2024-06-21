import { Component, OnInit } from '@angular/core';
import { ProductService } from "../services/product.service";
import { Router, ActivatedRoute } from '@angular/router';
import { Product, CartProduct } from '../types/products';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  selectedCatList: Product[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    private cartService: CartService
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.fetchCategoryItems(parseInt(id));
    }
  }

  private fetchCategoryItems(id: number): void {
    this.productService.getCategoryItems(id).subscribe(
      (data: Product[]) => this.selectedCatList = data,
      error => console.error('Error fetching category items', error)
    );
  }

  private addToCart(product: Product): void {
    this.cartService.add(product);
    alert(product.name + " added to cart");
  }
}
