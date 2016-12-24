import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ApiService } from '../../services/api.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
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
  dataStatus = true;
  constructor(
    private _auth: AuthService,
    private _api: ApiService,
    private _route: ActivatedRoute,
    private _router: Router,
    private _location:Location
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
                .subscribe(data =>this.chaps = this.chaps.concat(data),
                           error => this.dataStatus = false);
     //check null chap
     this._api.getApi("http://api.xtale.net/api/Chapters/"+bookSlug+"/"+(chap+1))
                .subscribe(data => {
                    if(data.length<1){
                      this.dataStatus = false;
                    }
                },
                           error => this.dataStatus = false);
    }

  onScrollDown () {
    if(this.dataStatus == true){
      this.start = this.start + this.sum;
      this.chap = this.chap + 1;
      console.log(this.chap);
      this._router.navigateByUrl("/sach/"+this.slug+"/"+this.chap);
    }
  }
  
}
