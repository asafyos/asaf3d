import { ChangeDetectionStrategy, Component, Input, signal } from '@angular/core';
import { OrderItem as OrderItemType } from '../../../../core/local-db/types';
import { CartService } from '../../../../services/cart-service';

@Component({
  selector: 'cart-order-item',
  standalone: false,
  templateUrl: './order-item.html',
  styleUrl: './order-item.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrderItem {

  @Input()
  item!: OrderItemType;

  subtitle = signal("");

  constructor(
    private _cart: CartService,
  ) {

  }

  ngOnInit(): void {
    this.subtitle.set(this.item?.colors.reverse().reduce((val, color, idx, all) => {
      return `${color.part.name}: ${color.color?.name}${idx === 0 ? '' : ','} ${val}`
    }, "") as string);
  }

  updateQuantity(): void {
    if (this.item.quantity == 0) {
      // TODO: validate delete
      this.removeItem();
    } else {
      this.item.finalPrice = this._cart.calcModelPrice(this.item);
    }
  }

  removeItem(): void {
    this._cart.removeItem(this.item);
  }

}
