import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ApiService } from '../../services/api.service';
import { SlugService } from '../../services/slug.service';
import { Review } from '../../model/review.model';
import { Router, ActivatedRoute, Params } from '@angular/router';
AuthService

@Component({
  selector: 'app-reviewDetail',
  templateUrl: './reviewDetail.component.html'
})
export class ReviewDetailComponent implements OnInit {
  reviews:Review[] = [];
  slug:string;
  sub: any;
  constructor(
    private _auth: AuthService,
    private _api: ApiService,
     private _route: ActivatedRoute,
    private _router: Router 
  ) { }

  ngOnInit() {
    this.sub = this._route.params.subscribe(params => {
      this.getStoryList(params['slug']);
    });
  }

  getStoryList(slug:string){
      this._api.getApi("http://api.xtale.net/api/Reviews/name/"+slug)
                .subscribe(data => this.reviews = this.reviews.concat(data),
                           error => this.reviews = <any>error);
  }
  
}
