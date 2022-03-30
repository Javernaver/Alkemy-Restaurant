import { ButtonModule } from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import { NgModule } from '@angular/core';

@NgModule({
  exports: [
    ButtonModule,
    InputTextModule,
  ]
})
export class PrimeNgModule { }
