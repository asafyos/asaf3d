import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReplaySubject } from 'rxjs';
import { LocalDbService } from '../../core/local-db/local-db-service';
import { Model } from '../../core/local-db/types';

@Component({
  selector: 'app-models-search',
  standalone: false,
  templateUrl: './models-search.page.html',
  styleUrl: './models-search.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModelsSearchPage {

  models$: ReplaySubject<Model[]> = new ReplaySubject(1);

  private _category: number | null = null;
  private _searchVal: string | null = null;

  constructor(
    private _route: ActivatedRoute,
    private _db: LocalDbService,
  ) { }

  ngOnInit(): void {
    this._route.queryParamMap.subscribe((params) => {
      this._category = parseInt(params.get("category") || "NaN") || null;
      this._searchVal = params.get("search");

      this.applyFilters();
    });
  }

  applyFilters(): void {
    this._db.getModels({
      category: this._category || undefined,
      searchVal: this._searchVal || undefined,
    }).then((models) => {
      models.push(...models)
      models.push(...models)
      models.push(...models)
      this.models$.next(models);
    });
  }
}
