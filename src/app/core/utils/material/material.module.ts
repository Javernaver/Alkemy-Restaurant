import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { NgModule } from '@angular/core';

@NgModule({
  exports: [
    MatProgressSpinnerModule,
    MatIconModule
  ]
})
export class MaterialModule { }
