import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ApiService } from '../../services/api.service';
import { SlugService } from '../../services/slug.service';
import { Review } from '../../model/review.model';
AuthService

@Component({
  selector: 'app-review',
  styles: [`
    .results {
        height: 100%;
    }
    @media only screen and (min-width: 700px) {
        .results {
            height: 100%;
            overflow: scroll;
        }
    }
  `],
  templateUrl: './review.component.html'
})
export class ReviewComponent implements OnInit {
  reviews:Review[] = [];
  sum:number = 6;
  start:number = 1;
  throttle:number = 300;
  scrollDistance:number = 1;
  dataStatus:boolean = true;

  constructor(
    private _auth: AuthService,
    private _api: ApiService
  ) { }

  ngOnInit() {
    //remove class in html, body
    let html = document.getElementsByTagName("html");
    let body = document.getElementsByTagName("body");
    body[0].removeAttribute("class");
    html[0].removeAttribute("class");

    this.getStoryList(this.start);
  }

  getStoryList(start:number){
     // Author: Linh Ho
     let end:number = start + this.sum - 1;
      this._api.getApi("http://api.xtale.net/api/Reviews/range/"+start+"/"+end)
                .subscribe(data => this.reviews = this.reviews.concat(data),
                           error => this.dataStatus = false);
  }
  
  onScrollDown() {
    if(this.dataStatus == true){
      this.start = this.start + this.sum;
      this.getStoryList(this.start);
    }
  }

}
