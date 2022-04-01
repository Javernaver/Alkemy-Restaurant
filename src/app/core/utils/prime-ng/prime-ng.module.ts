import { ButtonModule } from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import { NgModule } from '@angular/core';
import {ProgressSpinnerModule} from 'primeng/progressspinner';

@NgModule({
  exports: [
    ButtonModule,
    InputTextModule,
    ProgressSpinnerModule
  ]
})
export class PrimeNgModule { }
