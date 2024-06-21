import { Component } from '@angular/core';
import { Router } from '@angular/router'
import { faStore, faBagShopping, faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";


@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent {
  faStore=faStore;
  faBagShopping=faBagShopping;
  faCartShopping=faCartShopping;
  faUser=faUser;
  divs: boolean[] = [true, false, false, false];
  currentIndex = 0;

  constructor(private router: Router) { }
  goToHome() {

    this.router.navigate(['/registor']);
  }
  showNextDiv() {
    this.divs[this.currentIndex] = false;
    this.currentIndex = this.currentIndex + 1;
    this.divs[this.currentIndex] = true;
    if(this.currentIndex>= 4)
    {
      this.goToHome();
    }
  }
}
