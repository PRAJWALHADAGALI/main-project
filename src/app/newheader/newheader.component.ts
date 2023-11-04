import { Component } from '@angular/core';
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-newheader',
  templateUrl: './newheader.component.html',
  styleUrls: ['./newheader.component.css']
})
export class NewheaderComponent {
  faTimes = faTimes;
  faBars = faBars;
  clicked = false;

  handleclick() {
    this.clicked = !this.clicked;
  }
}
