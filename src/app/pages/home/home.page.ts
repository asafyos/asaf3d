import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { LocalDbService } from '../../core/local-db/local-db-service';
import { Model } from '../../core/local-db/types';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.page.html',
  styleUrl: './home.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePage {

  topSellModels: ReplaySubject<Model[]> = new ReplaySubject(1);
  model1: ReplaySubject<Model> = new ReplaySubject(1);

  constructor(private _localDb: LocalDbService) {
    _localDb.getModels().then((_models) => {
      this.topSellModels.next(_models)
      this.model1.next(_models[0] || null);
    })
  }

}
