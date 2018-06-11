import { Component, OnInit } from '@angular/core';
import { AppHttpService } from '../app-http.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-books',
  templateUrl: './detail-books.component.html',
  styleUrls: ['./detail-books.component.css']
})
export class DetailBooksComponent implements OnInit {

  public details: any;
  constructor(private _route: ActivatedRoute, private _router: Router, public appHttpService: AppHttpService) { }


    //  Gets the detail of a specific book and displays

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
      console.log('detail-books component is displayed in Detail-view component');

  }

}
