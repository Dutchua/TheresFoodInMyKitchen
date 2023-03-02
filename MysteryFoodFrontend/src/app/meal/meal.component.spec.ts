import { ComponentFixture, TestBed } from '@angular/core/testing';

import { mealComponent } from './meal.component';

describe('MealComponent', () => {
  let component: mealComponent;
  let fixture: ComponentFixture<mealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ mealComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(mealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
