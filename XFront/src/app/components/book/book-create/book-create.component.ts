import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormArray, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { BookService } from '../book.service';
import { SlugService } from '../../../services/slug.service';
import { Http } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit, OnDestroy {
   bookForm: FormGroup;
   private _bookIndex: number;
   private _book: any;
   private _subscription: Subscription;
   private _isNew = true;
   private _isDisplay = false;
  constructor(private _bookService: BookService,
              private _slug: SlugService,
              private _http: Http,
              private _formBuilder: FormBuilder,
              private _router: Router,
              private _route: ActivatedRoute) { }

  ngOnInit() {
    this._subscription = this._route.params.subscribe(
      (params: any) => {
        if(params.hasOwnProperty('StoryId')){
          this._isNew = false;
          this._bookIndex =  +params['StoryId'];
          this._book = this._bookService.getBook(this._bookIndex);
        } else {
          this._isNew = true;
          this._book = null;
        }
        this.initForm();
      }
    )
  }

// Submit form
  onSubmit() {
      const newBook = this.bookForm.value;
      if(this._isNew) {
        this._bookService.addBook(newBook);
      } else {
        this._bookService.updateBook(this._book);
      }
      console.log(newBook);
      this._bookService.navigateBack();
  }

  onCancel(){
      this._bookService.navigateBack();
  }

  ngOnDestroy(){
    this._subscription.unsubscribe();
  }

  private initForm() {
      
  //  let StoryName: '',
  //  let StoryProgress: number,
  //  let StoryStatus: number,
  //  let "Author": any,
  //  let "Genres":[any],
  //  let "UserId": string,
  //  let "Score": number,
  //  let "RateCount": number,
  //  let "Image": string,
  //  let "Slug": string
  }

}
