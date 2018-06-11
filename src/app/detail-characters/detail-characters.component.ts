import { Component, OnInit } from '@angular/core';
import { AppHttpService } from '../app-http.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-characters',
  templateUrl: './detail-characters.component.html',
  styleUrls: ['./detail-characters.component.css']
})
export class DetailCharactersComponent implements OnInit {

  public details: any;
  constructor(private _route: ActivatedRoute, private _router: Router, public appHttpService: AppHttpService) { }

    //  Gets the detail of a specific character and displays

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
      console.log('detail-characters component is displayed in Detail-view component');
  }

}
