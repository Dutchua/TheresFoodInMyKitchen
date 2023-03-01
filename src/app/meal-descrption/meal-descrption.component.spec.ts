import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealDescrptionComponent } from './meal-descrption.component';

describe('MealDescrptionComponent', () => {
  let component: MealDescrptionComponent;
  let fixture: ComponentFixture<MealDescrptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MealDescrptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MealDescrptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
