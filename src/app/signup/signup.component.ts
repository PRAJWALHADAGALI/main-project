import { Component } from '@angular/core';
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
    faUserPlus = faUserPlus;
    faFacebook=faFacebookF;
    faGoogle=faGoogle;
    faTwitter=faTwitter;

}
