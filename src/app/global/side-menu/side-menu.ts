import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  standalone: false,
  templateUrl: './side-menu.html',
  styleUrl: './side-menu.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SideMenu {

  @Output("closeNav")
  _closeNav: EventEmitter<void> = new EventEmitter();

  closeNav(): void {
    this._closeNav.next();
  }
}
