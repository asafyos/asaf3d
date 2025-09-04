import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { Order } from '../../core/local-db/types';
import { CartService } from '../../services/cart-service';

@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.page.html',
  styleUrl: './cart.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartPage {

  order$: ReplaySubject<Order> = new ReplaySubject(1);

  _order: Order

  constructor(
    cart: CartService,
  ) {
    this._order = {
      name: "",
      phone: "",
      finalPrice: 0,
      items: []
    }
    this.order$.next(this._order);

    cart.items$.subscribe(items => {
      this._order.items = items;
      this._order.finalPrice = items.reduce((sum, item) => {
        return sum + item.finalPrice;
      }, 0);
      this.order$.next(this._order);
    });
  }

}
