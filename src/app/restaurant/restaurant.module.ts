import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrimeNgModule } from '../core/utils/prime-ng/prime-ng.module';
import { RestaurantRoutingModule } from './restaurant-routing.module';
import { RestaurantScreenComponent } from './pages/restaurant-screen/restaurant-screen.component';

@NgModule({
  declarations: [
    RestaurantScreenComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    RestaurantRoutingModule
  ]
})
export class RestaurantModule { }
