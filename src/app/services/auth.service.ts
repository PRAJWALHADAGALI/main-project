import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../types/auth';
import { MessageService } from 'primeng/api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = 'http://localhost:3300';

  constructor(private http:HttpClient, private messageService:MessageService) { }
  registorUser(userDetails:User){
    return this.http.post(`${this.baseUrl}/user`,userDetails);
  }
  getUserByEmail(email: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/user?email=${email}`);
  }
}
