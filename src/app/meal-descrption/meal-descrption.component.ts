import { Component } from '@angular/core';

@Component({
  selector: 'app-meal-descrption',
  templateUrl: './meal-descrption.component.html',
  styleUrls: ['./meal-descrption.component.css']
})
export class MealDescrptionComponent {

  title = "Meal Description";
  nameOfPicture="";
  pictureLink = "http://";
  cuisine="Asian";
  mealDescription = "Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.";

  getTitle(){
    return this.title;
  }

  getNameOfPicture(){
    return this.nameOfPicture;
  }

  getPictureLink(){
    return this.pictureLink;
  }

  getCuisine(){
    return this.cuisine;
  }

  getMealDescription(){
    return this.mealDescription;
  }

}