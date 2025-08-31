import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { CartService } from '../../services/cart-service';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.html',
  styleUrl: './header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Header {

  @Output()
  openSidenav: EventEmitter<void> = new EventEmitter();

  openMenu(event: Event) {
    this.openSidenav.next();

  }

  constructor(public cart: CartService) {

  }
}
