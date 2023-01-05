import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


const USER_API = 'http://localhost:9090/api/user/';



@Injectable({
  providedIn: 'root'
})
export class UserRequestService {

  constructor(private http: HttpClient) {}

  public getUser(userEmail : string){
    return this.http.post(USER_API + "getUser",{"user_email" : userEmail});
  }

}
