import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { AppHttpService } from '../app-http.service';


@Component({
  selector: 'app-list-houses',
  templateUrl: './list-houses.component.html',
  styleUrls: ['./list-houses.component.css']
})
export class ListHousesComponent implements OnInit {
  public allData;

  constructor(private _route: ActivatedRoute, private _router: Router, public appHttpService: AppHttpService) { }


  //  displays the list of houses.
  ngOnInit() {
    this.allData = this._route.snapshot.data.option;
    console.log('List-houses component is displayed in List-view component');

  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnDestroy() {
    console.log('destroy in houses----');
  }

}

