import { ButtonModule } from 'primeng/button';
import {CardModule} from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext';
import {MessageModule} from 'primeng/message';
import {MessagesModule} from 'primeng/messages';
import { NgModule } from '@angular/core';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {TableModule} from 'primeng/table';

@NgModule({
  exports: [
    ButtonModule,
    InputTextModule,
    ProgressSpinnerModule,
    CardModule,
    MessagesModule,
    MessageModule,
    TableModule
  ]
})
export class PrimeNgModule { }
