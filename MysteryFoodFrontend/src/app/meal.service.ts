import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {Meal} from "./model/Meals";

 @Injectable({
  providedIn: 'root'
})

export class MealService {

   endPoint : string = "https://localhost:7274/Recipe";
   meal:Object = []
  constructor(private  http: HttpClient)
  {}


    getMeals(): Observable<Meal[]> {
    // let options = {};
    return this.http.get<Meal[]>(this.endPoint);
    }

   getMeal(id: number) {
     let options = {};
     return this.http.get(`${this.endPoint}/${id}`,options).subscribe(
       value => {
         this.meal = value;
         console.log(this.meal);

       })
   }

   rateMeal(id: number){
     let options = {};
     return this.http.patch(`${this.endPoint}/${id}`,options).subscribe(
       value => {
         this.meal = value;
         console.log(this.meal);

       }
     );



   }

}
