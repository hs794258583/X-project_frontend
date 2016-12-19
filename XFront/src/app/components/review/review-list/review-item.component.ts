import { Component, OnInit, Input } from '@angular/core';
import { Review } from '../../../model/review.model';

@Component({
  selector: 'app-reviewItem',
  templateUrl: './review-item.component.html'
})
export class ReviewItemComponent implements OnInit {
  @Input() review: Review;
  @Input() ReviewId: number;

  constructor() { }

  ngOnInit() {
    
  }

}
