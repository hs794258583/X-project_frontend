import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ApiService } from '../../services/api.service';
AuthService

@Component({
  selector: 'app-bookInfo',
  templateUrl: './bookInfo.component.html'
})
export class BookInfoComponent implements OnInit {
  bookInfo:any[];
  listChap:any[];
  constructor(
    private _auth: AuthService,
    private _api: ApiService
  ) { }

  ngOnInit() {
    this.getBookInfo();
    this.getListChap();
  }
  
   getBookInfo(){
     // Author: Linh Ho
      this._api.getApi("http://localhost:4200/assets/smock/api/bookInfo.json")
                .subscribe(data => this.bookInfo = data,
                           error => this.bookInfo = <any>error);
    }
    getListChap(){
     // Author: Linh Ho
      this._api.getApi("http://localhost:4200/assets/smock/api/listChap.json")
                .subscribe(data => this.listChap = data,
                           error => this.listChap = <any>error);
    }

}
