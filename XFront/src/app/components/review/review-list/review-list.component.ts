import { Component, OnInit } from '@angular/core';
import { Review } from '../../../model/review.model';
import { ReviewService } from '../review.service';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html'
})
export class ReviewListComponent implements OnInit {
  reviews: Review[] = [];
  errorMessage: string;
  constructor(private _reviewService: ReviewService) { }

  ngOnInit() {
    this._reviewService.fetchData();
    // this.reviews = this._reviewService.getReviews();
    
    this._reviewService.reviewChanged.subscribe(
      (reviews: Review[]) => this.reviews = reviews
    );
    console.log(this.reviews);
  }

  onSelected(review: Review) {
  }


  

}
