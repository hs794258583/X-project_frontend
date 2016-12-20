import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Review } from '../../../model/review.model';
import { Subscription } from 'rxjs/Rx';
import { ActivatedRoute, Router } from '@angular/router';
import { ReviewService } from '../review.service';

@Component({
  selector: 'app-review-edit',
  templateUrl: './review-edit.component.html',
  styleUrls: ['./review-edit.component.css'],
})
export class ReviewEditComponent implements OnInit {
  reviewForm: FormGroup;
  private _reviewIndex: number;
  private _review: Review;
  private _subscription: Subscription;
  private _isNew = true;
  content: string;
  constructor(private _route: ActivatedRoute,
              private _reviewService: ReviewService,
              private _formBuilder: FormBuilder,
              private _router:Router) { 
                this.content = '<p>Hello <strong>World !</strong></p>'
              }

  ngOnInit() {
    window['CKEDITOR']['replace']('ReviewContent');
     this._subscription = this._route.params.subscribe(  
      (params: any) =>  {        
        if (params.hasOwnProperty('ReviewId')) {
          this._isNew = false;
          this._reviewIndex = +params['ReviewId'];
          this._review = this._reviewService.getReview(this._reviewIndex);
        } else {
          this._isNew = true;
          this._review = null;
        }
        this.initForm();
      }
    );
  }

  onSubmit() {
       const newReview = this.reviewForm.value;
       if(this._isNew){
         this._reviewService.addReview(newReview);
       } else {
         this._reviewService.editReview(this._review, newReview);
       }
       this._reviewService.onStore();
       this.navigateBack();
  }
 
  onCancel() {
      this.navigateBack();
  }

  ngOnDestroy(){
    this._subscription.unsubscribe();
  }

  private navigateBack() {
      this._router.navigate(['thao-luan']);
  }

  private initForm() {  
      let ReviewTitle = '';
      let ImageUrl = '';
      let ReviewContent = '';   
      if(!this._isNew) {
        ReviewTitle = this._review.ReviewTitle;
        ImageUrl = this._review.ImageUrl;
        ReviewContent = this._review.ReviewContent;
      }
  this.reviewForm = this._formBuilder.group({
    ReviewTitle: [ReviewTitle, Validators.required],
    ImageUrl: [ImageUrl],
    ReviewContent: [ReviewContent]
  })
  }

}