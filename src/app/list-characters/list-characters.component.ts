import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { AppHttpService } from '../app-http.service';

@Component({
  selector: 'app-list-characters',
  templateUrl: './list-characters.component.html',
  styleUrls: ['./list-characters.component.css']
})
export class ListCharactersComponent implements OnInit {
  public allData;

  constructor(private _route: ActivatedRoute, private _router: Router, public appHttpService: AppHttpService) { }


  //  displays the list of characters.
  ngOnInit() {
    this.allData = this._route.snapshot.data.option;
        console.log('characters...........');
        console.log('List-characters component is displayed in List-view component');

  }

}
