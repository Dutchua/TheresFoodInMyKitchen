import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../environments/environment";
import {Login} from "./model/Login";
import {Register} from "./model/Register";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private path = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  public signOutExternal = () => {
    localStorage.removeItem("token");
    console.log("token deleted")
  }

  loginWithGoogle(credentials: string): Observable<any> {
    const header = new HttpHeaders().set('Content-type', 'application/json');
    return this.httpClient.post(this.path + "LoginWithGoogle", JSON.stringify(credentials), { headers: header});
  }

  login(loginModel: Login): Observable<any> {
    const header = new HttpHeaders().set('Content-type', 'application/json');

    return this.httpClient.post(this.path + 'Login', JSON.stringify(loginModel), { headers: header, withCredentials: true })
  }

  register(registerModel: Register): Observable<any> {
    const header = new HttpHeaders().set('Content-type', 'application/json');

    return this.httpClient.post(this.path + 'Register', JSON.stringify(registerModel), { headers: header, withCredentials: true })
  }
}
