import { Injectable } from '@angular/core';

import { Resolve, ActivatedRouteSnapshot, Router, RouterStateSnapshot, Data } from '@angular/router';

import {Observable, of } from 'rxjs';
import { AppHttpService } from './app-http.service';


@Injectable({
  providedIn: 'root'
})

export class AppResolverService  implements Resolve<Observable<any>> {

  constructor(  private _router: Router , private appHttpService: AppHttpService
  ) { }

//   Gets the list of books/characters/houses based on selected option from dropdown and passes to list view component
  resolve(route: ActivatedRouteSnapshot): Observable<any>  {
    console.log('Resolver!!');
      const option = route.params['option'];
      return this.appHttpService.getDataList(option);

      }

  }
