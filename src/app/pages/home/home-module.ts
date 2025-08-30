import { AsyncPipe, CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ModelCard } from './components/model-card/model-card';
import { HomeRoutingModule } from './home-routing-module';
import { HomePage } from './home.page';


@NgModule({
  declarations: [
    HomePage,
    ModelCard
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    AsyncPipe,
  ]
})
export class HomeModule { }
