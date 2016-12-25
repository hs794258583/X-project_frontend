import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ApiService } from '../../services/api.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
AuthService

@Component({
  selector: 'app-bookInfo',
  styles: [`
    .results {
      height: 100%;
    }
  `],
  templateUrl: './bookInfo.component.html'
})
export class BookInfoComponent implements OnInit {
  bookInfo:any[];
  listChap:any[] = [];
  slug:string;
  sub: any;

  sum:number = 10;
  start:number = 1;
  throttle:number = 300;
  scrollDistance:number = 1;
  dataStatus:boolean = true;
  constructor(
    private _auth: AuthService,
    private _api: ApiService,
    private _route: ActivatedRoute,
    private _router: Router 
  ) { }

  ngOnInit() {
    //remove class in html, body
    let html = document.getElementsByTagName("html");
    let body = document.getElementsByTagName("body");
    body[0].removeAttribute("class");
    html[0].removeAttribute("class");
    //sub params
    this.sub = this._route.params.subscribe(params => {
      this.slug = params['slug'];
      this.getBookInfo(this.slug);
      this.getListChap(this.start, this.slug);
    });
  }
  
   getBookInfo(bookSlug:string){
     // Author: Linh Ho
      this._api.getApi("http://api.xtale.net/api/Stories/name/"+bookSlug)
                .subscribe(data => this.bookInfo = data,
                           error => this.bookInfo = <any>error);
    }
    getListChap(start:number,bookSlug:string){
     // Author: Linh Ho
     let end:number = start + this.sum - 1;
      this._api.getApi("http://api.xtale.net/api/Chapters/range/"+bookSlug+"/"+start+"/"+end)
                .subscribe(data => this.listChap = this.listChap.concat(data),
                           error => this.listChap = <any>error);
     // check Chapters
     this._api.getApi("http://api.xtale.net/api/Chapters/range/"+bookSlug+"/"+(start+this.sum)+"/"+(end+this.sum))
                .subscribe(data => {
                  if(data.length<1){
                      this.dataStatus = false;
                  }
                },
                           error => this.listChap = <any>error);
    }

    onScrollDown () {
      if(this.dataStatus == true){
        this.start = this.start + this.sum;
        this.getListChap(this.start,this.slug);
      }
    }

}
