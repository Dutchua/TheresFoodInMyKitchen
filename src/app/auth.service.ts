import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../environments/environment";

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

  login(loginModel:any): Observable<any> {
    const header = new HttpHeaders().set('Content-type', 'application/json');

    return this.httpClient.post(this.path + 'Login', JSON.stringify(loginModel), { headers: header, withCredentials: true })
  }
}
