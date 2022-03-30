import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantScreenComponent } from './restaurant-screen.component';

describe('RestaurantScreenComponent', () => {
  let component: RestaurantScreenComponent;
  let fixture: ComponentFixture<RestaurantScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
