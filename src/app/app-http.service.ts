import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppHttpService {
  public baseUrl = 'https://anapioficeandfire.com/api/';

  constructor(private _http: HttpClient) { }

  private handleError(err: HttpErrorResponse) {
    console.log('Handles errors in http calls ');
    console.log(err.message);
    return Observable.throw(err.message);

  }

  // Service to find the data of specific category (Books/characters/Houses)

  public getDataList(option: string): any {
    console.log('Service to get list of ' + option + 'is getting called...........');
    const myResponse = this._http.get(this.baseUrl + option);
    return myResponse;

  }
  // console.log(myResponse);

// Service to find the details of a specific book/character/house
  public getInfo(option): any {
    const myResponse = this._http.get(this.baseUrl + option);
    console.log('Service to get ' + option + ' info is getting called...........');
    return myResponse;
  }

// Service to get all the data of houses, characters , books and returns an observable with three arrays
  public getAllData() {
    console.log('Service to get all  data is getting called...........');

    return forkJoin(this._http.get(this.baseUrl + 'books'), this._http.get(this.baseUrl + 'characters'),
      this._http.get(this.baseUrl + 'houses'));

  }

}
