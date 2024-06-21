import { Component } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() { }

  // onCreatePost(product: Products) {
  //   this.http.post("https://shopping-a3b9b-default-rtdb.firebaseio.com/shopping.json", product)
  //     .subscribe(responseData => {
  //       console.log(responseData);
  //     });
  // }
  // private fetchProducts() {
  //   http.get("https://shopping-a3b9b-default-rtdb.firebaseio.com/shopping.json").subscribe(product =>{
  //     console.log(product);
  //   });
  // }
  // onFetchPost(){
  //   return this.fetchProducts;
  // }
  
}
