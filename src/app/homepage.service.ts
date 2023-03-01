import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class HomepageService {
  private path = environment.apiUrl;
  constructor(
    private http: HttpClient
  ) { }

  fetchID() {
    // const header = new HttpHeaders().set('Content-type', 'application/json');
    return this.http.get(this.path);
  }

}
