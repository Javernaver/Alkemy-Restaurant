import { CommonModule } from '@angular/common';
import { HomeScreenComponent } from './pages/home-screen/home-screen.component';
import { NgModule } from '@angular/core';
import { PrimeNgModule } from '../core/utils/prime-ng/prime-ng.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HomeScreenComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    RouterModule
  ],
  exports: [
    HomeScreenComponent
  ]
})
export class SharedModule { }
