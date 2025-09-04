import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { debounceTime, ReplaySubject, take } from 'rxjs';
import { LocalDbService } from '../../core/local-db/local-db-service';
import { Color, Model, OrderItem } from '../../core/local-db/types';
import { CartService } from '../../services/cart-service';

@Component({
  selector: 'app-model',
  standalone: false,
  templateUrl: './model.page.html',
  styleUrl: './model.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModelPage {

  model$: ReplaySubject<Model> = new ReplaySubject(1);
  colors$: ReplaySubject<Color[]> = new ReplaySubject(1);
  orderItem$: ReplaySubject<OrderItem> = new ReplaySubject(1)

  price = signal(0);

  constructor(
    private _route: ActivatedRoute,
    private _db: LocalDbService,
    private _cart: CartService,
  ) { }

  ngOnInit(): void {
    const id = this._route.snapshot.paramMap.get('id');

    if (id != null) {
      this._db.getModel(parseInt(id)).then((_model) => {
        if (_model) {
          this.model$.next(_model)
          const orderItem: OrderItem = {
            model: _model,
            quantity: 1,
            notes: '',
            custom: false,
            finalPrice: 0,
            colors: _model.parts.map(part => ({
              part,
              notes: "",
              color: undefined
            }))
          };
          this.orderItem$.next(orderItem);
        }
      })
    }

    this._db.getColors().then(colors => this.colors$.next(colors));
    this.updatePrice();
  }

  updatePrice(): void {
    this.orderItem$.pipe(debounceTime(0), take(1)).subscribe(item => {
      this.price.set(this._cart.calcModelPrice(item));
    })
  }

  addToCart(item: OrderItem): void {
    if (this._cart.validateOrderItemColors(item)) {
      this._cart.addModel(item);
    } else {
      // TODO: Error message select all colors
    }
  }

}
