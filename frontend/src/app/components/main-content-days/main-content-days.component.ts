import {
  AfterContentInit,
  AfterViewInit,
  ChangeDetectionStrategy,
  Component, ElementRef, EventEmitter,
  Input,
  OnInit, Output,
  ViewChild
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CrudService, Habit } from '../../services/crud.service';

@Component( {
  selector        : 'app-main-content-days',
  templateUrl     : './main-content-days.component.html',
  styleUrls       : [ './main-content-days.component.css' ],
  changeDetection : ChangeDetectionStrategy.OnPush
} )

export class MainContentDaysComponent implements OnInit {
  comment = '../../../assets/images/comment.svg';

  delete = '../../../assets/images/delete.svg';

  public formGroup! : FormGroup;

  constructor( private crudService : CrudService ) {
  }

  @ViewChild( 'commentInput' ) public commentInput! : ElementRef<HTMLDivElement>;

  @ViewChild( 'commentInput' ) public deleteBtn? : ElementRef<HTMLDivElement>;

  @Input() public days? : Array<any> = [];

  @Input() public nextDay? : number;

  @Input() public currentHabitId? : string;

  @Output() public eventAddDay = new EventEmitter();

  @Output() public eventDeleteDay = new EventEmitter();

  ngOnInit() {
    this.formGroup = new FormGroup( {
      comment : new FormControl()
    } );
  }

  /**
   * Добавление дня для привычки
   * @param event - Event
   */
  addDay( event : Event ) {
    event.preventDefault();
    let comment = this.formGroup.value.comment;
    const input = this.commentInput.nativeElement;
    input.classList.remove( 'error' );
    if( !comment ) {
      input.classList.add( 'error' );
    } else {
      this.eventAddDay.emit( comment );
    }
  }

  /**
   * Удаление дней привычки
   * @param number
   */
  onDeleteDayButtonClick( number : number ) {
    const index = Number( number ) - 1;
    this.eventDeleteDay.emit( index );
  }
}
