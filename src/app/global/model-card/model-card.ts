import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Model } from '../../core/services/providers/types';

@Component({
  selector: 'app-model-card',
  standalone: false,
  templateUrl: './model-card.html',
  styleUrl: './model-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModelCard {

  @Input()
  model: Model | null = null;

}
