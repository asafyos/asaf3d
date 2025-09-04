import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { Model } from '../../core/local-db/types';

@Component({
  selector: 'app-model-card',
  templateUrl: './model-card.html',
  styleUrl: './model-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
  ],
})
export class ModelCard {

  @Input()
  model!: Model;

  constructor(private _router: Router) {

  }

  openModel(): void {
    this._router.navigate(['/model', this.model.id])
  }

}
