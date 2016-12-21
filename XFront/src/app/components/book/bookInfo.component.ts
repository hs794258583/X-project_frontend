import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ApiService } from '../../services/api.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
AuthService

@Component({
  selector: 'app-bookInfo',
  templateUrl: './bookInfo.component.html'
})
export class BookInfoComponent implements OnInit {
  bookInfo:any[];
  listChap:any[];
  sub: any;
  constructor(
    private _auth: AuthService,
    private _api: ApiService,
    private _route: ActivatedRoute,
    private _router: Router 
  ) { }

  ngOnInit() {
    this.sub = this._route.params.subscribe(params => {
      this.getBookInfo(params['slug']);
    });
    this.getListChap();
  }
  
   getBookInfo(bookSlug){
     // Author: Linh Ho
      this._api.getApi("http://api.xtale.net/api/Stories/name/"+bookSlug)
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
