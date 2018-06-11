import { Component, OnInit, OnChanges, Input, OnDestroy } from '@angular/core';

import {ActivatedRoute, Router, Data } from '@angular/router';

import {AppHttpService} from '../app-http.service';
import { DetailBooksComponent } from '../detail-books/detail-books.component';
import { DetailHousesComponent } from '../detail-houses/detail-houses.component';
import { DetailCharactersComponent } from '../detail-characters/detail-characters.component';


@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.css']
})

// Based on the selected item i.e Bookdetail/CharacterDetail/HouseDetail  loads that sepcific component
export class DetailViewComponent implements OnInit {
  public optionSelected;

  constructor(private _route: ActivatedRoute, private _router: Router
   ) {}


  ngOnInit() {

    this.optionSelected = this._route.snapshot.paramMap.get('item');
    console.log('In Detail-view component');


    }

    // tslint:disable-next-line:use-life-cycle-interface
}
