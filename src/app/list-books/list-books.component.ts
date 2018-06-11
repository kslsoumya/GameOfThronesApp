import { Component, OnInit, OnDestroy} from '@angular/core';


import {ActivatedRoute, Router } from '@angular/router';

import {AppHttpService} from '../app-http.service';

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.css']
})
export class ListBooksComponent implements OnInit {
  public allData;

  constructor(private _route: ActivatedRoute, private _router: Router, public appHttpService: AppHttpService) { }


  //  displays the list of books.
  ngOnInit() {
        this.allData = this._route.snapshot.data.option;
        console.log('Books...........');
        console.log('List-Books component is displayed in List-view component');
      }
  }
