import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  // public progressPercent? : string;
  //
  // public progressCoverBar? : string;
  //
  // public habits? : Observable<Habit[]>;
  //
  // public habitsArray : Habit[] = [];
  //
  // constructor( private crudService : CrudService,
  //              private dataService : DataTransferService ) {
  // }
  //
  // @Input() selectedHabit? : Habit[]
  //
  // ngOnInit() {
  //   this.habits = this.crudService.getHabits();
  //   this.habits.subscribe( ( habits : Habit[] ) => {
  //     this.habitsArray = habits;
  //     this.fillProgressBar( this.habitsArray );
  //   } );
  //
  //   console.log("this.selectedHabit");
  //   console.log(this.selectedHabit);
  // }
  //
  // /**
  //  * @desc Получение текущего прогресса в процентах
  //  * @param {Object} habit - текущая привычка
  //  * @returns {String}
  //  */
  // getProgressPercent( habit : Habit ) : string {
  //   return ( habit.days.length / habit.target > 1
  //     ? 100
  //     : habit.days.length / habit.target * 100 ).toFixed( 0 ) + '%'
  // }
  //
  // /**
  //  * @desc Заполнение прогресс бара
  //  */
  // fillProgressBar( habitsArray : any[] ) {
  //   const firstHabit = habitsArray[ 0 ];
  //   this.progressPercent = this.getProgressPercent( firstHabit );
  //   this.progressCoverBar = `width: ${ this.progressPercent }%`;
  // }
  //
  // reRenderHabit() {
  //   this.dataService.data$.subscribe( currentHabit => {
  //     console.log( currentHabit );
  //   } );
  // }
}
