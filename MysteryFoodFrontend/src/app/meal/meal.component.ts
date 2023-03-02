import { Component } from '@angular/core';
import { MealService} from "../meal.service";

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.css']
})

export class mealComponent {

  Meals ;


  constructor(private mealService : MealService) {
    this.Meals = this.mealService.getMeals();
  }

  getNameOfPicture(){
  return
  }
  getTitle() {
    return ;

  }

  getCuisine() {
    return ;
  }

  getMealDescription() {
    return ;

  }

  ratemeal(number: number) {

    return;
  }
}
