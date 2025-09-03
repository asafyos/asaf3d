import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public items$: ReplaySubject<object[]> = new ReplaySubject();

  constructor() {
    this.items$.next([]);
  }

}
