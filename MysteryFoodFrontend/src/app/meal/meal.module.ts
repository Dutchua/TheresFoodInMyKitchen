import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {MealComponent} from "./meal.component";
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "../app-routing/app-routing.module";

@NgModule({
  declarations: [

    MealComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AppRoutingModule
  ],

  exports: [
    MealComponent
  ]
})
export class MealModule { }
