import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormArray, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Review } from '../../../model/review.model';
import { Subscription } from 'rxjs/Rx';
import { ActivatedRoute, Router } from '@angular/router';
import { ReviewService } from '../review.service';
import { SlugService } from '../../../services/slug.service';
import { Ng2UploaderOptions } from 'ng2-uploader';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-review-edit',
  templateUrl: './review-edit.component.html',
  styleUrls: ['./review-edit.component.css'],
})
export class ReviewEditComponent implements OnInit, OnDestroy{
  reviewForm: FormGroup;
  private _reviewIndex: number;
  private _review: any;
  private _subscription: Subscription;
  private _isNew = true;
  private _isDisplay = false;

  constructor(private _route: ActivatedRoute,
              private _reviewService: ReviewService,
              private _formBuilder: FormBuilder,
              private _router:Router,
              private _slug:SlugService,
              private _http: Http) { 
               
              }


  ngOnInit() {
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
        if(this._isNew) {
            this._reviewService.addReview(newReview);
        } else {
          this._reviewService.updateReview(this._review);
        }
         
         console.log(newReview);
             
       this._reviewService.navigateBack();
  }

  onCancel() {
      this._reviewService.navigateBack();
  }

  ngOnDestroy(){
    this._subscription.unsubscribe();
  }

 

// fileChange(event) {
//     let fileList: FileList = event.target.files;
//     if(fileList.length > 0){
//       let file: File = fileList[0];
//       let formData: FormData = new FormData();
//       formData.append('uploadFile', file, file.name);
//       let headers = new Headers();
//       headers.append('Content-Type', 'multipart/form-data');
//       headers.append('Accept', 'application/json');
//       let options = new RequestOptions({headers: headers});
//       this._http.post('http://api.xtale.net/api/reviews', formData, options)
//                 .map(res => res.json())
//                 .catch(error => Observable.throw(error))
//                 .subscribe(
//                   data => console.log('success'),
//                   error => console.log(error)
//                 )
//     }
// }

  private initForm() { 
      
      let ReviewTitle = '';
      let ReviewContent = ''; 
      let ReviewStatus = 1;
      let CreatedDate =  new Date().toUTCString();
      let LastEditedDate = new Date().toUTCString();
      let UserId = '8';
      let Score = 0;
      let RateCount = 0;   
      let ImageUrl = 'https://techpur.com/wp-content/plugins/facebook-share-like-popup-viralplus/default.jpg'; 
      let Slug = 'sample string 106';

      if(!this._isNew) {
        ReviewTitle = this._review.ReviewTitle;
        ReviewContent = this._review.ReviewContent; 
        ReviewStatus = this._review.ReviewStatus; 
        CreatedDate = this._review.CreatedDate.toUTCString();
        LastEditedDate = this._review.LastEditedDate.toUTCString();
        UserId = this._review.UserId;
        Score = this._review.Score;
        RateCount = this._review.RateCount;
        ImageUrl = this._review.Image;
        Slug = this._slug.getSlug(this._review.Slug);
      }
  this.reviewForm = this._formBuilder.group({
    ReviewTitle: [ReviewTitle],
    ReviewContent :[ReviewContent],
    ReviewStatus : [ReviewStatus],
    CreatedDate :[CreatedDate],
    LastEditedDate: [LastEditedDate],
    UserId : [UserId],
    Score : [Score],
    RateCount : [RateCount],
    Image: [ImageUrl],
    Slug: [Slug]
  })
  }
}