import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {MealRoutingModule} from './meal-routing.module';
import {mealComponent} from "./meal.component";
import { HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [

    mealComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MealRoutingModule
  ],

  exports: [
    mealComponent
  ]
})
export class MealModule { }
