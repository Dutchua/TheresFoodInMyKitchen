import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Meal} from "./model/Meals";

@Injectable({
  providedIn: 'root'
})

export class MealService {

   endPoint : string = "https://localhost:7274/Recipe";
  constructor(private  http: HttpClient) {}

    getMeals(): Observable<Meal[]> {
    return this.http.get<Meal[]>(this.endPoint);
    }

   getMeal(id: number): Observable<Meal> {
     return this.http.get<Meal>(`${this.endPoint}/${id}`);
   }

}
