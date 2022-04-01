import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeViewScreenComponent } from './recipe-view-screen.component';

describe('RecipeViewScreenComponent', () => {
  let component: RecipeViewScreenComponent;
  let fixture: ComponentFixture<RecipeViewScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeViewScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeViewScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
