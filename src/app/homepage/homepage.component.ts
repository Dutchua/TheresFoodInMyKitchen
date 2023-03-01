import {Component, OnInit} from '@angular/core';
import {HomepageService} from "../homepage.service";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit{
  // description: string = [];
  constructor(
    private homepageService: HomepageService
  ) {}

  ngOnInit(): void{
    this.fetchId()
  }
  fetchId(){
    this.homepageService.fetchID().subscribe(
      value =>{
        // this.description = value;
        console.log(value);
      })
  }

}
