import {Component, OnInit} from '@angular/core';
import { MealService} from "../meal.service";
import {Meal} from "../model/Meals";

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.css']
})

export class MealComponent implements OnInit {

  meals: Meal[] | undefined ;


  constructor(private mealService : MealService) {
  }

  ngOnInit(): void {
    this.getMeals();
    console.log(this.meals);
  }

  getMeals():void {
    this.mealService.getMeals().subscribe(
      value => {
        this.meals = value;
      })
  }

  getTitle() {

  }

  getCuisine() {

  }

  getNameOfPicture(){

  }

  getMealDescription() {

  }

  ratemeal(number: number) {

  }
}
