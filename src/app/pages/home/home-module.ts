import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ServicesModule } from '../../core/services/services-module';
import { HomePage } from './home.page';



@NgModule({
  declarations: [
    HomePage
  ],
  imports: [
    CommonModule,
    ServicesModule,
  ],
})
export class HomeModule { }
