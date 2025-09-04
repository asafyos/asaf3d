import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { OrderItem as OrderItemType } from '../../../../core/local-db/types';

@Component({
  selector: 'cart-order-item',
  standalone: false,
  templateUrl: './order-item.html',
  styleUrl: './order-item.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrderItem {

  @Input()
  item: OrderItemType | null = null;

}
