import { ChangeDetectionStrategy, Component } from '@angular/core';
import { environment } from '../../../environments/environment';
import { LocalDb } from '../../core/services/local-db';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.page.html',
  styleUrl: './home.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePage {

  constructor(private _localDb: LocalDb) {
    console.log(environment.mock)
    _localDb.getCategories().then((categories) => {
      console.table(categories);
    })
  }
}
