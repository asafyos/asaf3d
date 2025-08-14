import { AsyncPipe, CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ServicesModule } from '../../core/services/services-module';
import { GlobalModule } from '../../global/global.module';
import { HomePage } from './home.page';
import { ModelCard } from './model-card/model-card';


@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
    CommonModule,
    ServicesModule,
    GlobalModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    AsyncPipe,
    ModelCard,
  ],
})
export class HomeModule { }
