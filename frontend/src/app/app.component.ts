import { Component, OnInit } from '@angular/core';
import { CrudService, Day, Habit } from './services/crud.service';

@Component( {
  selector    : 'app-root',
  templateUrl : './app.component.html',
  styleUrls   : [ './app.component.css' ]
} )

export class AppComponent implements OnInit {
  constructor( private crudService : CrudService ) {
  }

  public progressPercent? : string;

  public progressCoverBar? : string;

  public habitsArray : Array<Habit> = [];

  public habitDays : object[] = [];

  public nextDay : number = 0;

  public currentHabitId? : string;

  public currentHabit? : Habit;

  ngOnInit() {
    this.crudService.getHabits().subscribe( habit => {
      this.habitsArray = habit;
      this.currentHabit = this.habitsArray[ 0 ];
      this.getDays( this.habitsArray );
      this.fillProgressBar( this.currentHabit );
    } );
  }

  /**
   * @desc Получение текущего прогресса в процентах
   * @param {Object} habit - текущая привычка
   * @returns {String}
   */
  getProgressPercent( habit : Habit ) : string {
    return ( habit.days.length / habit.target > 1
      ? 100
      : habit.days.length / habit.target * 100 ).toFixed( 0 ) + '%'
  }

  /**
   * @desc Заполнение прогресс бара
   */
  fillProgressBar( currentHabit : Habit | undefined ) {
    if( currentHabit ) {
      this.progressPercent = this.getProgressPercent( currentHabit );
      this.progressCoverBar = `width: ${ this.progressPercent }%`;
    }
  }

  /**
   * Получение дней
   * @param habitsArray - Habit[]
   */
  getDays( habitsArray : Habit[] ) {
    const firstHabit = habitsArray[ 0 ];
    this.currentHabitId = firstHabit.id;
    this.habitDays = firstHabit.days.map( day => {
      return day;
    } );
    let counter = 0;
    this.habitDays.forEach( day => {
      counter += 1;
      day = Object.assign( day, { number : counter } );
      return day;
    } );
    this.nextDay = firstHabit.days.length + 1;
  }

  /**
   * Выбор привычки
   * @param value
   */
  public selectHabit( value : string ) : void {
    this.currentHabit = this.habitsArray.find( habit => habit.id === value );
    this.currentHabitId = value;

    if( this.currentHabit ) {
      this.habitDays = this.currentHabit.days.map( day => {
        return day;
      } );

      let counter = 0;
      this.habitDays.forEach( day => {
        counter += 1;
        day = Object.assign( day, { number : counter } );
        return day;
      } );
      this.nextDay = this.currentHabit.days.length + 1;
    }
    this.fillProgressBar( this.currentHabit );
  }

  getCurrentHabit() {
    return this.habitsArray.find( habit => {
      return habit.id === this.currentHabitId;
    } );
  }

  /**
   * Изменение привычки
   * @param value
   */
  addDay( value : string ) : void {
    const day: Day = { comment : value, number: this.nextDay };
    const currentHabit = this.getCurrentHabit();
    if( currentHabit ) {
      currentHabit.days.push( day );
      this.updateHabit( currentHabit );
    }
  }

  deleteDay( index : number ) : void {
    const currentHabit = this.getCurrentHabit();
    if( currentHabit ) {
      currentHabit.days.splice( index, 1 );
      this.updateHabit( currentHabit );
    }
  }

  updateHabit( currentHabit : Habit ) {
    this.crudService.updateHabit( this.currentHabitId, currentHabit ).subscribe( habit => {
      this.getDays( this.habitsArray );
    } );
  }

}
