import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ApiService } from '../../services/api.service';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Review } from '../../model/review.model';
import { InfiniteScroll } from 'angular2-infinite-scroll';

@Component({
  selector: 'app-home',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
   selectedReview: Review;
    constructor() { }

  ngOnInit() {
  }

//   title = 'Hello InfiniteScroll v0.2.8, Ng2 Final';

//   datas: any[];
//   array = [];
//   sum = 40;
//   throttle = 300;
//   scrollDistance = 1;
//   errorMessage: string;

//   constructor(private _auth: AuthService,
//               private _api: ApiService) { 
//                this.addItem(0, this.sum)
//               }

//   ngOnInit() {
//       this.getReviewList();
//   }
//  getReviewList() {
//    this._api.getApi("http://localhost:4200/assets/smock/api/reviewList.json")
//              .subscribe(data => this.datas = data,
//                          error => this.errorMessage = <any>error) 
                         
//     //return this.datas;                       
//  }
// addItem(startIndex, endIndex) {
//     for (let i = 0; i < this.sum; ++i) {
//       this.array.push(i);
//     }
//   }

// onScrollDown() {
//     console.log('scrolled!!');
//     // add another 20 items
//     const start = this.sum;
//     this.sum += 6;
//     this.addItem(start, this.sum);
//   }

  
}
