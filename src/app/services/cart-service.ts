import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { LocalDbService } from '../core/local-db/local-db-service';
import { OrderItem } from '../core/local-db/types';
import { Cookies } from '../core/utils/storage';

const CART_COOKIE = "cart";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public items$: ReplaySubject<OrderItem[]> = new ReplaySubject(1);
  private _items: OrderItem[] = [];

  private _modelBaseCost: number = 0;
  private _avgColorPrice: number = 0;
  private _hourBaseCost: number = 0;
  private _amsExtraPercentage: number = 0;

  constructor(
    private _db: LocalDbService,
  ) {
    this.restoreCookieCart();

    this.items$.subscribe((cart) => {
      if (cart.length > 0) {
        Cookies.set(CART_COOKIE, JSON.stringify(cart));
      } else {
        Cookies.delete(CART_COOKIE);
      }
    })

    this._db.getPrintBaseParams().then(({ modelBaseCost, avgColorPrice, hourBaseCost, amsExtraPercentage }) => {
      this._modelBaseCost = modelBaseCost;
      this._avgColorPrice = avgColorPrice;
      this._hourBaseCost = hourBaseCost;
      this._amsExtraPercentage = amsExtraPercentage;
    })
  }

  public calcModelPrice(item: OrderItem): number {
    const partsSumPrice: number = item.colors.reduce((val, color) => {
      return val + (color.part.weight * (color.color?.kgPrice || this._avgColorPrice) / 1000)
    }, 0)

    const singlePrice = Math.ceil(Math.max(this._modelBaseCost, this._hourBaseCost * item.model.printTime / 60) + partsSumPrice);
    const finalPrice = singlePrice * (item.quantity || 1) + Math.ceil(singlePrice * (item.model.ams ? this._amsExtraPercentage : 0));

    return finalPrice;
    // Item price = ceil((max(itemBase, hourBase*printTime) + sum({colors} weight*kgPrice/1000))*amsModificator)
  }

  public validateOrderItemColors(item: OrderItem): boolean {
    return item.colors.every(color => color.color !== undefined);
  }

  public addModel(item: OrderItem): void {
    if (this.validateOrderItemColors(item)) {
      const exsitingItem = this.checkItemExists(item);
      if (exsitingItem) {
        exsitingItem.quantity += item.quantity;
        exsitingItem.finalPrice = this.calcModelPrice(exsitingItem);
      } else {
        item.finalPrice = this.calcModelPrice(item);
        this._items.push(item);
      }

      this.items$.next(this._items);
    }
  }

  private checkItemExists(item: OrderItem): OrderItem | undefined {
    return this._items.find((i) => {
      return i.model.id === item.model.id &&
        i.notes == item.notes &&
        i.colors.every((color) => {
          const matchColor = item.colors.find(c => c.part.id === color.part.id);
          return color?.color?.id === matchColor?.color?.id
        })
    });
  }

  public removeItem(item: OrderItem): void {
    const idx = this._items.indexOf(item);
    if (idx >= 0) {
      this._items.splice(idx, 1);
      this.items$.next(this._items);
    }
  }

  private restoreCookieCart(): void {
    const cartStr = Cookies.get(CART_COOKIE);
    if (cartStr) {
      try {
        const cartJson = JSON.parse(cartStr) as OrderItem[];
        if (cartJson) {
          this._items = cartJson;
          this.items$.next(this._items);
        } else {
          this._items = [];
          this.items$.next(this._items);
        }
      } catch (ex) {
        this._items = [];
        this.items$.next(this._items);
      }
    } else {
      this._items = [];
      this.items$.next(this._items);
    }
  }

}
