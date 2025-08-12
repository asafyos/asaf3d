import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { Header } from './header/header';
import { ModelCard } from './model-card/model-card';
import { SideMenu } from './side-menu/side-menu';

@NgModule({
  declarations: [
    ModelCard,
    Header,
    SideMenu,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    RouterLink
  ],
  exports: [
    ModelCard,
    Header,
    SideMenu,
  ]
})
export class GlobalModule { }
