import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { faStore,faBagShopping, faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
   constructor(private router: Router) { }
  faStore = faStore;
  faBagShopping=faBagShopping;
  faCartShopping=faCartShopping;
  faUser=faUser;
  logOut() {
    sessionStorage.clear();
    this.router.navigate(['login']);
  }
}
