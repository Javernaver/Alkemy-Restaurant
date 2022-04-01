import { AuthRoutingModule } from './auth-routing.module';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { MaterialModule } from '../core/utils/material/material.module';
import { NgModule } from '@angular/core';
import { PrimeNgModule } from '../core/utils/prime-ng/prime-ng.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    PrimeNgModule,
    MaterialModule
  ]
})
export class AuthModule { }
