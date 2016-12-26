import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { FormArray, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Review } from '../../../model/review.model';
import { Subscription } from 'rxjs/Rx';
import { ActivatedRoute, Router } from '@angular/router';
import { ReviewService } from '../review.service';
import { SlugService } from '../../../services/slug.service';
import { Ng2UploaderOptions } from 'ng2-uploader';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { NgUploaderOptions } from 'ngx-uploader';
import { UploadService } from './upload.service';

const uploadURL = 'http://api.xtale.net/api/FileUpload';

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
  UserInfo:any = JSON.parse(localStorage.getItem('profile'));
   picName: string;
  constructor(private _route: ActivatedRoute,
              private _reviewService: ReviewService,
              private _formBuilder: FormBuilder,
              private _router:Router,
              private _slug:SlugService,
              private _http: Http,
              private _uploadService:UploadService) { 
               this._uploadService.progress$.subscribe(
                   data => {
                    console.log('progress = '+data);
                    });
              }


  ngOnInit() {
    //remove class in html, body
    //let ck = window['CKEDITOR']['replace']( 'ReviewContent' );
    let html = document.getElementsByTagName("html");
    let body = document.getElementsByTagName("body");
    body[0].removeAttribute("class");
    html[0].removeAttribute("class");

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



     onChange(event) {
       console.log('onChange');
         var files = event.srcElement.files;
        console.log(files);
           this._uploadService.makeFileRequest('http://api.xtale.net/api/FileUpload', [], files).subscribe(() => {
        console.log('sent');
        this.picName = files;
     });
     }
// @ViewChild("fileInput") fileInput;
//  addFile(): void {
//     let fi = this.fileInput.nativeElement;
//     if (fi.files && fi.files[0]) {
//         let fileToUpload = fi.files[0];
//         this.upload(fileToUpload)
//             .subscribe(res => {
//                 console.log(res);
//             });
//     }
// }
// upload(fileToUpload: any) {
//     let input = new FormData();
//     input.append("file", fileToUpload);

//     return this._http
//         .post("http://api.xtale.net/api/FileUpload", input);
// }
//Upload File
// uploadFile: any;
//   hasBaseDropZoneOver: boolean = false;
//   options: NgUploaderOptions = {
//     url: 'http://api.xtale.net/api/FileUpload',
//     allowedExtensions: ['image/png', 'image/jpg'],
//   };
//   sizeLimit = 2000000;

//   handleUpload(data): void {
//     if (data && data.response) {
//       data = JSON.parse(data.response);
//       this.uploadFile = data;
//     }
//   }

//   fileOverBase(e:any):void {
//     this.hasBaseDropZoneOver = e;
//   }

//   beforeUpload(uploadingFile): void {
//     if (uploadingFile.size > this.sizeLimit) {
//       uploadingFile.setAbort();
//       alert('File is too large');
//     }
//   }

// Init form
  private initForm() { 
      
      let ReviewTitle = '';
      let ReviewContent = ''; 
      let ReviewStatus = 1;
      let CreatedDate =  new Date().toUTCString();
      let LastEditedDate = new Date().toUTCString();
      let UserId = this.UserInfo.user_id;
      let Score = 0;
      let RateCount = 0;   
      let ImageUrl = ''; 
      let Slug = '';

      if(!this._isNew) {
        ReviewTitle = this._review.ReviewTitle;
        ReviewContent = this._review.ReviewContent; 
        ReviewStatus = this._review.ReviewStatus; 
        CreatedDate = this._review.CreatedDate.toUTCString();
        LastEditedDate = this._review.LastEditedDate.toUTCString();
        UserId = this.UserInfo.user_id;
        Score = this._review.Score;
        RateCount = this._review.RateCount;
        ImageUrl = this._review.Image;
        Slug = this._slug.getSlug(ReviewTitle);
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
  });
  }
}