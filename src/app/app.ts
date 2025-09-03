import { Component, signal } from '@angular/core';
import { MatSidenav, MatSidenavContainer, MatSidenavContent } from "@angular/material/sidenav";
import { RouterOutlet } from '@angular/router';
import { GlobalModule } from './global/global-module';

@Component({
  selector: 'app-root',
  // standalone: false,
  imports: [
    RouterOutlet,
    GlobalModule,
    MatSidenav,
    MatSidenavContainer,
    MatSidenavContent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('asaf3d');
}