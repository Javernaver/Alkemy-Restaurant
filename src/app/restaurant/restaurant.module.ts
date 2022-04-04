import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './components/menu/menu.component';
import { MenuScreenComponent } from './pages/menu-screen/menu-screen.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgModule } from '@angular/core';
import { PrimeNgModule } from '../core/utils/prime-ng/prime-ng.module';
import { RecipeCardComponent } from './components/recipe-card/recipe-card.component';
import { RecipeCardListComponent } from './components/recipe-card-list/recipe-card-list.component';
import { RecipeViewScreenComponent } from './pages/recipe-view-screen/recipe-view-screen.component';
import { RestaurantRoutingModule } from './restaurant-routing.module';
import { RestaurantScreenComponent } from './pages/restaurant-screen/restaurant-screen.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { SharedModule } from '../shared/shared.module';
import { VegetarianPipe } from './pipes/vegetarian.pipe';

@NgModule({
  declarations: [
    RestaurantScreenComponent,
    MenuComponent,
    RecipeCardComponent,
    RecipeCardListComponent,
    RecipeViewScreenComponent,
    NavbarComponent,
    SearchInputComponent,
    MenuScreenComponent,
    VegetarianPipe
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    RestaurantRoutingModule,
    FormsModule,
    SharedModule,
    FlexLayoutModule
  ]
})
export class RestaurantModule { }
