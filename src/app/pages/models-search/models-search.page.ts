import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
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

  searchVal = signal("");

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _db: LocalDbService,
  ) { }

  ngOnInit(): void {
    this._route.queryParamMap.subscribe((params) => {
      this._category = parseInt(params.get("category") || "NaN") || null;
      this._searchVal = params.get("search");
      this.searchVal.set(this._searchVal || "");

      this.applyFilters();
    });
  }

  applyFilters(): void {
    this.updateLocation();

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

  onSearch(): void {
    this._searchVal = this.searchVal();
    this.updateLocation();
  }

  updateLocation(): void {
    const queryParams: Params = {
      category: this._category || undefined,
      search: this._searchVal || undefined,
    }

    this._router.navigate([], {
      queryParams,
      queryParamsHandling: "replace",
      relativeTo: this._route
    });
  }
}
