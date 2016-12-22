import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ApiService } from '../../services/api.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
AuthService

@Component({
  selector: 'app-chap',
  styles: [`
    .results {
      height: 100%;
    }
  `],
  templateUrl: './chap.component.html'
})
export class ChapComponent implements OnInit {
  sub:any;
  slug:string;
  chaps:any[]=[];
  chap:number;
  sum = 12;
  start = 1;
  throttle = 300;
  scrollDistance = 1;
  constructor(
    private _auth: AuthService,
    private _api: ApiService,
    private _route: ActivatedRoute,
    private _router: Router,
  ) { }

  ngOnInit() {
      this.sub = this._route.params.subscribe(params => {
        this.slug = params['slug'];
        this.chap = +params['chap'];
        this.getChapContent(this.slug, this.chap);
    });
  }
  
  getChapContent(bookSlug:string, chap:number){
     // Author: Linh Ho
      this._api.getApi("http://api.xtale.net/api/Chapters/"+bookSlug+"/"+chap)
                .subscribe(data => this.chaps = this.chaps.concat(data),
                           error => this.chaps = <any>error);
    }

  onScrollDown () {
    this.start = this.start + this.sum;
    this.chap = this.chap + 1;
    console.log(this.chap);
    this.getChapContent(this.slug, this.chap);
  }
  
}
