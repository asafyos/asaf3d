import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatSidenav, MatSidenavContainer, MatSidenavContent } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';
import { App } from './app';
import { CoreModule } from './core/core-module';
import { GlobalModule } from './global/global-module';



@NgModule({
  declarations: [App],
  imports: [
    CommonModule,
    RouterOutlet,
    GlobalModule,
    MatSidenav,
    MatSidenavContainer,
    MatSidenavContent,
    CoreModule.forRoot(),
  ],
  bootstrap: [App]
})
export class AppModule { }
