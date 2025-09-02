import { AsyncPipe, CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';
import { ModelCard } from '../../components/model-card/model-card';
import { HomeRoutingModule } from './home-routing-module';
import { HomePage } from './home.page';



@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    AsyncPipe,
    ModelCard,
    MatInput,
    MatFormFieldModule,
    FormsModule,
    MatChipsModule,
  ]
})
export class HomeModule { }
