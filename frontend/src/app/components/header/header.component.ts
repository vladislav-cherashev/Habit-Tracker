import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Habit } from '../../services/crud.service';

@Component( {
  selector        : 'app-header',
  templateUrl     : './header.component.html',
  styleUrls       : [ './header.component.css' ],
  changeDetection : ChangeDetectionStrategy.OnPush
} )
export class HeaderComponent {
  constructor() {
  }

  @Input() public habit? : Habit;

  @Input() public currentHabitId? : string;

  @Input() public progressPercent? : string;

  @Input() public progressCoverBar? : string;
}
