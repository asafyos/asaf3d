import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { ReplaySubject } from 'rxjs';
import { environment } from '../../../environments/environment';
import { LocalDbService } from '../../core/local-db/local-db-service';
import { Category, Model } from '../../core/local-db/types';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.page.html',
  styleUrl: './home.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePage {

  topSellModels$: ReplaySubject<Model[]> = new ReplaySubject(1);
  categories$: ReplaySubject<Category[]> = new ReplaySubject(1);

  searchVal: string = '';

  constructor(
    private _localDb: LocalDbService,
    private _router: Router,
  ) { }

  ngOnInit(): void {
    this._localDb.getModels().then((models) => {
      this.topSellModels$.next(models.slice(0, 3))
    })

    this._localDb.getCategories().then((categories) => {
      const _categories = [...categories]
      if (environment.mock) {
        _categories.push(..._categories)
        _categories.push(..._categories)
      }
      this.categories$.next(_categories);
    })
  }

  onSearch(): void {
    this._router.navigate(['/models'], {
      queryParams: { search: this.searchVal }
    });
  }

  navToSearch(categoryId?: number): void {
    this._router.navigate(['/models'], {
      queryParams: { category: categoryId }
    });
  }

}
