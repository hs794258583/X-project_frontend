import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Subscription } from 'rxjs/Rx';
import { Review } from '../../../model/review.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ReviewService } from '../review.service';

@Component({
  selector: 'app-reviewDetail',
  templateUrl: './reviewDetail.component.html'
})
export class ReviewDetailComponent implements OnInit, OnDestroy {
  private _subscription: Subscription;
  private _reviewIndex: number;
  selectedReview: Review;

  constructor(private _auth: AuthService,
              private _route: ActivatedRoute,
              private _router: Router,
              private _reviewService: ReviewService) {
   }

  ngOnInit() {  
    this._subscription = this._route.params.subscribe(
        (params: any) => {
          this._reviewIndex = params['ReviewId'];
          this.selectedReview = this._reviewService.getReview(this._reviewIndex);
          console.log(this.selectedReview);
        }
    );
  }
  onEdit() {
       this._router.navigate(['/thao-luan', this._reviewIndex, 'edit']);
  }
  
  onDelete() {
    this._reviewService.deleteReview(this.selectedReview);
    this._reviewService.onStore();
    this._router.navigate(['/thao-luan']);
  }

  ngOnDestroy(){
      this._subscription.unsubscribe();
  }

}
