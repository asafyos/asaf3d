import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Model } from '../../../core/services/providers/types';

@Component({
  selector: 'home-model-card',
  templateUrl: './model-card.html',
  styleUrl: './model-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [    
    MatCardModule,
    MatButtonModule,
    MatIconModule,
  ]
})
export class ModelCard {

  @Input()
  model: Model | null = null;

}
