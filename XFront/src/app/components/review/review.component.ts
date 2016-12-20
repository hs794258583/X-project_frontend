import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ApiService } from '../../services/api.service';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Review } from '../../model/review.model';


@Component({
  selector: 'app-home',
  templateUrl: './review.component.html'
})
export class ReviewComponent implements OnInit {
  throttle =  300;
  scrollDistance = 1;
  sum = 6;

  reviews: any[];
  errorMessage: string;

  constructor(private _auth: AuthService,
              private _api: ApiService) { }

  ngOnInit() {
      this.getReviewList();
  }
 getReviewList() {
   this._api.getApi("http://localhost:4200/assets/smock/api/reviewList.json")
             .subscribe(data => this.reviews = data,
                         error => this.errorMessage = <any>error)                         
 }

 addItem(startIndex, endIndex) {
   for(let i = 0; i < this.sum; ++i) {
     this.reviews.push()
   }
 }
onScrollDown() {
   console.log('scrolled!!');
   //Add another 6 items
   const start = this.sum;
   this.sum += 6;
  this.addItem(start, this.sum);
}
onScrollUp () {
        console.log('scrolled up!!')
    }

}
