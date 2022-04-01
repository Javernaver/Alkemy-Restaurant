import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../core/utils/material/material.module';
import { MenuComponent } from './components/menu/menu.component';
import { NgModule } from '@angular/core';
import { PrimeNgModule } from '../core/utils/prime-ng/prime-ng.module';
import { RecipeCardComponent } from './components/recipe-card/recipe-card.component';
import { RecipeCardListComponent } from './components/recipe-card-list/recipe-card-list.component';
import { RecipeViewScreenComponent } from './pages/recipe-view-screen/recipe-view-screen.component';
import { RestaurantRoutingModule } from './restaurant-routing.module';
import { RestaurantScreenComponent } from './pages/restaurant-screen/restaurant-screen.component';
import { SearchInputComponent } from './components/search-input/search-input.component';

@NgModule({
  declarations: [
    RestaurantScreenComponent,
    MenuComponent,
    RecipeCardComponent,
    RecipeCardListComponent,
    RecipeViewScreenComponent,
    SearchInputComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    MaterialModule,
    RestaurantRoutingModule,
    FormsModule
  ]
})
export class RestaurantModule { }
