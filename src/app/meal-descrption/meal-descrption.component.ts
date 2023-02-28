import { Component } from '@angular/core';

@Component({
  selector: 'app-meal-descrption',
  templateUrl: './meal-descrption.component.html',
  styleUrls: ['./meal-descrption.component.css']
})
export class MealDescrptionComponent {

  title = "Meal Description";

  getTitle(){
    return this.title;
  }
}
