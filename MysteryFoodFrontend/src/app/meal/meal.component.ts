import {Component, OnInit} from '@angular/core';
import { MealService} from "../meal.service";
import {Meal} from "../model/Meals";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.css']
})

export class MealComponent implements OnInit {

  meal: Meal | undefined;

  constructor(
    private route: ActivatedRoute,
    private mealService : MealService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getMeal();
  }

  getMeal():void {
    const cuisineId = Number(this.route.snapshot.paramMap.get("cuisineId"));
    this.mealService.getMeal(cuisineId).subscribe(
      meal => {
        this.meal = meal;
      });
  }

  getDescription() {
    return this.meal?.description;
  }

  getMealInstruction() {
    return this.meal?.instruction;
  }

  goBack(): void {
    this.location.back()
  }
}
