import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Order } from '../../../../core/local-db/types';

@Component({
  selector: 'cart-summary',
  standalone: false,
  templateUrl: './summary.html',
  styleUrl: './summary.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Summary {
  @Input()
  order!: Order;



}
