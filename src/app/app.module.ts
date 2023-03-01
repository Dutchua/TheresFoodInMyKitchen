import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from "./material/material.module";
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import { MealDescrptionComponent } from './meal-descrption/meal-descrption.component';
import {RegisterComponent} from "./register/register.component";
import {ReactiveFormsModule} from "@angular/forms";
import { HomepageComponent } from './homepage/homepage.component';
import {HomepageService}  from "./homepage.service";

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    LogoutComponent,
    MealDescrptionComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    RouterModule.forRoot([
      // {path: '', redirectTo: "login", pathMatch: 'full'},
      // {path: 'login', component: LoginComponent},
      {path: '', redirectTo: "homepage", pathMatch: 'full'},
      {path: 'homepage', component: HomepageComponent},
      {path: 'mealdescription', component: MealDescrptionComponent},
      {path: 'register', component: RegisterComponent},
      {path: 'logout', component: LogoutComponent}
    ]),
    ReactiveFormsModule,
  ],
  providers: [HomepageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
