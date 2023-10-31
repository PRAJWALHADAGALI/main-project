import { Component } from '@angular/core';
import { faStore,faBagShopping, faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  faStore = faStore;
  faBagShopping=faBagShopping;
  faCartShopping=faCartShopping;
  faUser=faUser;

}
