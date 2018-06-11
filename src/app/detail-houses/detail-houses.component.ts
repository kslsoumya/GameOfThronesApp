import { Component, OnInit } from '@angular/core';
import { AppHttpService } from '../app-http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail-houses',
  templateUrl: './detail-houses.component.html',
  styleUrls: ['./detail-houses.component.css']
})
export class DetailHousesComponent implements OnInit {

  public details: any;
  constructor(private _route: ActivatedRoute, private _router: Router, public appHttpService: AppHttpService) { }

  //  Gets the detail of a specific house and displays

  ngOnInit() {
    const optionSelected = this._route.snapshot.paramMap.get('item');
    const idSelected = this._route.snapshot.paramMap.get('id');
    const option = optionSelected + '/' + idSelected;
      this.appHttpService.getInfo(option).subscribe(
        data => {
          // console.log(data);
          this.details = data;
        },
        error => {
          console.log(error);
        }
      );
      console.log('detail-houses component is displayed in Detail-view component');

  }

  }

