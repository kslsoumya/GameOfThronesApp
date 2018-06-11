import { Component, OnInit } from '@angular/core';

import { forkJoin } from 'rxjs';
import { AppHttpService } from '../app-http.service';
import { concat, every  } from 'rxjs/operators';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public allData;
  public finData;
  constructor(public appHttpService: AppHttpService) {}

  //  displays the list of all houses,books,characters when VIEW ALL DATA is selected

  ngOnInit() {
    this.appHttpService.getAllData().subscribe (
      // gets and observable with three arrays and all are concatenated
      data => {
        this.allData = data;
        this.finData = this.allData[0].concat(this.allData[1], this.allData[2]);
        this.finData.forEach(val => {
          // If there is no name for any sepecific character,replacing it with alisaes inorder to sort it based on name
          if (val.name === '') {
            val.name = val.aliases[0];
          }
      });
    },
      error => {
        console.log(error.errorMessage);
      }
    );
    console.log('List component(displays all data) is displayed in List-view component');


  }


}
