import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { RestaurantScreenComponent } from './pages/restaurant-screen/restaurant-screen.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: RestaurantScreenComponent },
      
      { path: '**', redirectTo: ''},
    ]
  }
]


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class RestaurantRoutingModule { }
