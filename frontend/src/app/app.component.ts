import { Component, OnInit } from '@angular/core';
import { CrudService, Habit } from './services/crud.service';
import {
  logBuilderStatusWarnings
} from '@angular-devkit/build-angular/src/builders/browser-esbuild/builder-status-warnings';

@Component( {
  selector    : 'app-root',
  templateUrl : './app.component.html',
  styleUrls   : [ './app.component.css' ]
} )

export class AppComponent implements OnInit {
  constructor( private crudService : CrudService ) {
  }

  public habitsArray : Habit[] = [];

  public habitDays : object[] = [];

  public nextDay : number = 0;

  public currentHabitId? : string;

  ngOnInit() {
    this.crudService.getHabits().subscribe( habit => {
      this.habitsArray = habit;
      this.getDays( this.habitsArray );
    } );
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
    const currentHabit = this.habitsArray.find( habit => habit.id === value );
    this.currentHabitId = value;

    if( currentHabit ) {
      this.habitDays = currentHabit.days.map( day => {
        return day;
      } );

      let counter = 0;
      this.habitDays.forEach( day => {
        counter += 1;
        day = Object.assign( day, { number : counter } );
        return day;
      } );
      this.nextDay = currentHabit.days.length + 1;
    }
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
    const day = { comment : value };
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
