import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ApiService } from '../../services/api.service';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Review } from '../../model/review.model';
import { InfiniteScroll } from 'angular2-infinite-scroll';

@Component({
  selector: 'app-home',
  templateUrl: './review.component.html'
})
export class ReviewComponent implements OnInit {
   selectedReview: Review;
    constructor() { }

  ngOnInit() {
  }


  
}
