import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Habit } from '../../services/crud.service';

@Component( {
  selector        : 'app-side-menu',
  templateUrl     : './side-menu.component.html',
  styleUrls       : [ './side-menu.component.css' ],
  changeDetection : ChangeDetectionStrategy.OnPush
} )
export class SideMenuComponent {

  @Input() habits? : Habit[];

  @Output() eventSelectHabit = new EventEmitter();

  @Output() eventAddHabit = new EventEmitter();

  public selectedHabitId : string = '';


  imagePath = '../../../assets/images/';

  addBtn = '../../../assets/images/add.svg';

  logo = '../../../assets/images/logo.svg';


  onHabitSelectClick( $event : Event ) : void {
    const selectedHabit = $event.currentTarget as HTMLDivElement;
    this.selectedHabitId = selectedHabit.id;
    this.eventSelectHabit.emit( this.selectedHabitId );
  }

  addHabit() : void {

  }
}
