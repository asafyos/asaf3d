import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  standalone: false,
  templateUrl: './carousel.html',
  styleUrl: './carousel.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Carousel {

}
