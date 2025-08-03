import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ServicesModule } from './core/services/services-module';
import { GlobalModule } from './global/global.module';
import { HomeModule } from './pages/home/home-module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    GlobalModule,
    HomeModule,
    ServicesModule.forRoot(),
  ],
  providers: [
    GlobalModule,
    HomeModule,
  ],
})
export class AppModule { }
