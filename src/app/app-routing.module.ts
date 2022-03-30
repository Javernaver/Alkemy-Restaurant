import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './auth/guards/auth.guard';
import { HomeScreenComponent } from './shared/pages/home-screen/home-screen.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {path: '', redirectTo: '/' , pathMatch: 'full'},
  {path: '', component: HomeScreenComponent},
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'restaurant',
    canLoad: [AuthGuard],
    canActivate: [AuthGuard],
    loadChildren: () => import('./restaurant/restaurant.module').then(m => m.RestaurantModule),
    
  },
  {path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
