import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Model } from '../../../../core/local-db/types';

@Component({
  selector: 'home-model-card',
  standalone: false,
  templateUrl: './model-card.html',
  styleUrl: './model-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModelCard {

  @Input()
  model: Model | null = null;

  constructor(private _router: Router) {

  }

  openModel(): void {
    this._router.navigate(['/model', this.model?.id])
  }

}
