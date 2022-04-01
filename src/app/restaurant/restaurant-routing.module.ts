import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { RecipeViewScreenComponent } from './pages/recipe-view-screen/recipe-view-screen.component';
import { RestaurantScreenComponent } from './pages/restaurant-screen/restaurant-screen.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: RestaurantScreenComponent },
      { path: 'recipe/:id', component: RecipeViewScreenComponent },
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
