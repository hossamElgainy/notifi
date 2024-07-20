import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../../login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient:HttpClient) { }

  Login(model:any):Observable<any>{
    return this.httpClient.post(`http://localhost:5218/api/Accounts/login`, model);
  }
}
