import { ButtonModule } from 'primeng/button';
import {CardModule} from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext';
import { NgModule } from '@angular/core';
import {ProgressSpinnerModule} from 'primeng/progressspinner';

@NgModule({
  exports: [
    ButtonModule,
    InputTextModule,
    ProgressSpinnerModule,
    CardModule,
  ]
})
export class PrimeNgModule { }
