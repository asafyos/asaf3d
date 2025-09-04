import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { OrderItem } from '../../core/local-db/types';
import { CartService } from '../../services/cart-service';

@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.page.html',
  styleUrl: './cart.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartPage {

  items$: ReplaySubject<OrderItem[]>;

  constructor(
    cart: CartService,
  ) {
    this.items$ = cart.items$;
  }

}
