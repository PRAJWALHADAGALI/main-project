import { Component } from '@angular/core';
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { User } from '../types/auth';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  faUser = faUser;
  loginForm = this.fb.group({
    email:['',[Validators.required, Validators.email]],
    password:['',Validators.required]
  })

  constructor(private fb: FormBuilder,private msgService:MessageService,private router: Router,
  private authService: AuthService) {

  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }
  loginUser() {
    const { email, password } = this.loginForm.value;
    this.authService.getUserByEmail(email as string).subscribe(
      response => {
        if (response.length > 0 && response[0].password === password) {
          sessionStorage.setItem('email', email as string);
          this.router.navigate(['/home']);
        } else {
          this.msgService.add({ severity: 'error', summary: 'Error', detail: 'email or password is wrong' });
        }
      },
      error => {
        this.msgService.add({ severity: 'error', summary: 'Error', detail: 'Something went wrong' });
      }

    )
  }

}
