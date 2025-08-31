import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { debounceTime, ReplaySubject, take } from 'rxjs';
import { LocalDbService } from '../../core/local-db/local-db-service';
import { Color, Model } from '../../core/local-db/types';

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
  modelBaseCost: number = 0;
  avgColorPrice: number = 0;
  hourBaseCost: number = 0;

  price$: ReplaySubject<number> = new ReplaySubject(1);

  constructor(
    private _route: ActivatedRoute,
    private _db: LocalDbService,
  ) { }

  ngOnInit(): void {
    const id = this._route.snapshot.paramMap.get('id');

    this._db.getPrintBaseParams().then(({ modelBaseCost, avgColorPrice, hourBaseCost }) => {
      this.modelBaseCost = modelBaseCost;
      this.avgColorPrice = avgColorPrice;
      this.hourBaseCost = hourBaseCost;
    })

    if (id != null) {
      this._db.getModel(parseInt(id)).then((_model) => {
        if (_model) {
          _model.note = "";
          _model.quantity = 1;
          this.model$.next(_model)
        }
      })
    }

    this._db.getColors().then(colors => this.colors$.next(colors));
    this.updatePrice();
  }

  updatePrice(): void {
    this.price().then(price => {
      this.price$.next(price);
    })
  }

  async price(): Promise<number> {
    return new Promise(resolve => {
      this.model$.pipe(debounceTime(0), take(1)).subscribe(m => {
        const partsSumPrice: number = m.parts.reduce((val, p) => {
          return val + (p.weight * (p.selectedColor?.kgPrice || this.avgColorPrice) / 1000)
        }, 0)

        const finalPrice = Math.ceil(Math.max(this.modelBaseCost, this.hourBaseCost * m.printTime / 60) + partsSumPrice) * (m.quantity || 1);
        console.log("price", finalPrice);


        resolve(finalPrice);
        // Item price = ceil(max(itemBase, hourBase*printTime) + sum({colors} weight*kgPrice/1000))
      })
    })
  }

}
