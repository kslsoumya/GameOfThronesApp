import { Component, OnInit, OnChanges, Input, OnDestroy } from '@angular/core';

import {ActivatedRoute, Router, Data } from '@angular/router';

import {AppHttpService} from '../app-http.service';
import { ListBooksComponent } from '../list-books/list-books.component';
import { ListCharactersComponent } from '../list-characters/list-characters.component';
import { ListHousesComponent } from '../list-houses/list-houses.component';
import {AppResolverService} from '../app-resolver.service';


@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})

// takes the value of selected option i.e books/characters/houses and loads that specific component
export class ListViewComponent implements OnInit {
  public optionSelected;

  constructor(private _route: ActivatedRoute, private _router: Router, public appHttpService: AppHttpService ,
    private appResolverService: AppResolverService
   ) {
      this._route.params.subscribe(params => {
        console.log('In list-view component') ;
        this.optionSelected = this._route.snapshot.paramMap.get('option');
      });
  }

  ngOnInit() {
    }

    // tslint:disable-next-line:use-life-cycle-interface
}
