import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

 @Injectable({
  providedIn: 'root'
})

export class MealService {

   endPoint : string = "https://localhost:7274/Recipe";
  constructor(private  http: HttpClient)
  {}
    getMeals() {
    let options = {};
      return this.http.get(this.endPoint,options)
    }

   getMeal(id: number) {
     let options = {};
     return this.http.get(`${this.endPoint}/${id}`,options)
   }

   rateMeal(id: number){
     let options = {};
     return this.http.patch(`${this.endPoint}/${id}`,options);

   }

}
