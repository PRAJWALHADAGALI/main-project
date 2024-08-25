import { Component } from '@angular/core';
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { User } from '../types/auth';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  faUserPlus = faUserPlus;
  faFacebook = faFacebookF;
  faGoogle = faGoogle;
  faTwitter = faTwitter;

  registorFrom = this.fb.group({
    name: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/)]],
    phone: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private messageService: MessageService
  ) { }

  get name() {
    return this.registorFrom.get('name');
  }
  get phone() {
    return this.registorFrom.get('phone');
  }
  get email() {
    return this.registorFrom.get('email');
  }
  get password() {
    return this.registorFrom.get('password');
  }

  submit() {
    if (this.registorFrom.invalid) {
      return;
    }
    const postData = {
      ...this.registorFrom.value,
      phone: Number(this.registorFrom.value.phone)
    };
    this.authService.registorUser(postData as User).subscribe(
      response => {
        console.log(response);
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Register successfully' });
        this.router.navigate(['login']);
      },
      error => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Something went wrong' });
      }
    );
  }
}
