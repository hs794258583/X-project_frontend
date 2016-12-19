import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Review } from '../../model/review.model';
import { Headers, Http, Response } from '@angular/http';
import { ApiService } from '../../services/api.service';

@Injectable()
export class ReviewService {
  reviewChanged = new EventEmitter<Review[]>();

  private _reviews: Review[] = [];

  constructor(private _http: Http) { }

  getReviews(){
   return this._reviews;
  }
  
  getReview(ReviewId: number) {
        return this._reviews[ReviewId];
  }
  
  deleteReview(review: Review) {
    this._reviews.splice(this._reviews.indexOf(review), 1);
  }
  
  addReview(review: Review) {
    this._reviews.push(review);
  }

  editReview(oldReview: Review, newReview: Review) {
    this._reviews[this._reviews.indexOf(oldReview)] = newReview;
  }

  storeData() {
    const body= JSON.stringify(this._reviews);
    const headers = new Headers({
        'Content-Type': 'application/json'
    });
    return this._http.put('https://angular2-course-178bd.firebaseio.com/review.json', body, {headers: headers});
  }

  onStore(){
    this.storeData().subscribe(
      data => console.log(data),
      error => console.log(error)
    );
  }

  fetchData(){
    return this._http.get('https://angular2-course-178bd.firebaseio.com/review.json')
           .map((response: Response) => response.json())
           .subscribe(
             (data: Review[]) => {
               this._reviews = data;
               this.reviewChanged.emit(this._reviews);
             }
           );
  }


}
