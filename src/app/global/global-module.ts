import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { Header } from './header/header';
import { SideMenu } from './side-menu/side-menu';

@NgModule({
  declarations: [
    Header,
    SideMenu,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatBadgeModule,
    RouterLink,
  ],
  exports: [
    Header,
    SideMenu,
  ]
})
export class GlobalModule { }
