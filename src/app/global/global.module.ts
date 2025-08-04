import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Header } from './header/header';
import { ModelCard } from './model-card/model-card';

@NgModule({
  declarations: [
    ModelCard,
    Header,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
  ],
  exports: [
    ModelCard,
    Header,
  ]
})
export class GlobalModule { }
