import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  isOpen = false;
  isDropdownOpen = false;


 toggleNavbar() {
   this.isOpen = !this.isOpen;
 }

 toggleDropDown() {
   this.isDropdownOpen = !this.isDropdownOpen;
 }
}
