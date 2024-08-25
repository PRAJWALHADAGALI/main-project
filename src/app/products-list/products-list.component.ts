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
  productQuantities: { [key: number]: number } = {};
  lowStock: { [key: number]: boolean } = {};
  noStock: { [key: number]: boolean } = {};

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
      (data: Product[]) => {
        this.selectedCatList = data;
        this.selectedCatList.forEach(product => {
          this.fetchProductQuantity(product.id);
        });
      },
      error => console.error('Error fetching category items', error)
    );
  }

  private fetchProductQuantity(id: number): void {
    this.productService.getProductQty(id).subscribe(
      (qty: number) => {
        this.productQuantities[id] = qty;
        this.lowStock[id] = (qty < 5 && qty > 0);
        this.noStock[id] = (qty === 0);
      },
      error => console.error(`Error fetching quantity for product ${id}`, error)
    );
  }

  private addToCart(product: Product): void {
    const quantity = this.productQuantities[product.id];
    if (quantity > 0) {
      this.cartService.add(product);
    } else {
      console.error('Product out of stock');
    }
  }

  isLowStock(productId: number): boolean {
    return this.lowStock[productId] || false;
  }

  isNoStock(productId: number): boolean {
    return this.noStock[productId] || false;
  }
}
