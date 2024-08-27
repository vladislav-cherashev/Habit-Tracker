import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import {
  logBuilderStatusWarnings
} from '@angular-devkit/build-angular/src/builders/browser-esbuild/builder-status-warnings';


export interface Habit {
  id : string,
  icon : string,
  name : string,
  target : number,
  days : Array<object>,
}

@Injectable( {
  providedIn : 'root'
} )

export class CrudService {

  constructor( private http : HttpClient ) {
  }

  apiUrl : string = 'http://localhost:3000/api/habits';
  headers = new HttpHeaders().set( 'Content-Type', 'application/json' );

  // Create
  createHabit( data : any ) : Observable<any> {
    return this.http.post( this.apiUrl, data ).pipe( catchError( this.error ) );
  }

  // Read
  getHabits() : Observable<Habit[]> {
    return this.http.get<Habit[]>( `${ this.apiUrl }` );
  }

  // ReadOne
  getOneHabit( id : any ) : Observable<Habit[]> {
    return this.http.get<Habit[]>( `${ this.apiUrl }/${id}` );
  }

  // Update
  updateHabit( id : any, data : any ) : Observable<any> {
    const API_URL = `${ this.apiUrl }/${id}`;
    return this.http
      .patch( API_URL, data, { headers : this.headers } )
      .pipe( catchError( this.error ) );
  }

  // Delete
  deleteHabit( id : any ) : Observable<any> {
    const API_URL = `${ this.apiUrl }/${id}`;
    return this.http.delete( API_URL ).pipe( catchError( this.error ) );
  }

  // Handle Errors
  error( error : HttpErrorResponse ) {
    let errorMessage = '';
    if( error.error instanceof ErrorEvent ) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${ error.status }\nMessage: ${ error.message }`;
    }
    console.log( errorMessage );
    return throwError( () => {
      return errorMessage;
    } );
  }
}
