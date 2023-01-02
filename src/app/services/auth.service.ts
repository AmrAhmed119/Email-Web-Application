import { Injectable } from '@angular/core';
import {HttpHeaders, HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


const AUTH_API = 'http://localhost:8080/api/auth/';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

  login(credentials: { email: any; password: any; }): Observable<any> {
    console.log(AUTH_API + 'login' + '?'
      + credentials.email + '&' + credentials.password)
    return this.http.post(AUTH_API + 'login' + '?'
      + 'email=' +credentials.email + '&password=' + credentials.password
    ,{});
  }

  register(user: { name: any; email: any; password: any; }): Observable<any> {
    return this.http.post(AUTH_API + 'register', {
      name: user.name,
      email: user.email,
      password: user.password,
    });
  }

}
