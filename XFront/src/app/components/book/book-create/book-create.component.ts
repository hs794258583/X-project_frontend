import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormArray, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { BookService } from '../book.service';
import { SlugService } from '../../../services/slug.service';
import { Http } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { Story } from '../../../model/story.model';
import { Chapters } from '../../../model/chapters.model';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit, OnDestroy {
   bookForm: FormGroup;
   private _bookIndex: number;
   private _book: Story;
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

// Init Genres
  initGenres(){
    return this._formBuilder.group({
      GenreId: [1],
      GenreName: ['Trinh tham'],
      GenreStatus: [3],
      Slug: "trinh tham"
    })
  }

// Init Chapters
initChapters() {
  return this._formBuilder.group({
      ChapterId: [1],
      StoryId: [2],
      ChapterNumber: [3],
      ChapterTitle: ["sample string 4"],
  })
}
// initAuthors() {
//   return this._formBuilder.group({
    
//   })
// }

// Initialize form
  private initForm() {
      
   let StoryName =  '';
   let StoryProgress = 4;
   let StoryDescription = '';
   let StoryStatus = 1;
   let Author = {
     "AuthorId": 1,
     "AuthorName": "Lomonoxov",
     "AuthorStatus": 3,
     "Slug": "Lo mo no xov",
   };
   let CreatedDate = new Date().toUTCString();
   let LastEditedDate = new Date().toUTCString();
   let UserId = '9';
   let Score = 0;
   let RateCount = 0;
   let Image = 'https://techpur.com/wp-content/plugins/facebook-share-like-popup-viralplus/default.jpg';
   let Slug = 'sample string 106';


   if(!this._isNew) {
      StoryName = this._book.StoryName;
      StoryProgress = this._book.StoryProgress;
      StoryDescription = this._book.StoryDescription;
      StoryStatus = this._book.StoryStatus;
     

      CreatedDate = this._book.CreatedDate.toUTCString();
      LastEditedDate = this._book.LastEditedDate.toUTCString();
      UserId = this._book.UserId;
      Score = this._book.Score;
      RateCount = this._book.RateCount;
      Image = this._book.Image;
      Slug = this._book.Slug;

   }

   //Book FormBuiler
   this.bookForm = this._formBuilder.group({
      StoryName: [StoryName],
      StoryProgress : [StoryProgress],
      StoryDescription : [StoryDescription],
      StoryStatus : [StoryStatus],
      CreatedDate: [CreatedDate],
      LastEditedDate: [LastEditedDate],
      UserId : [UserId],
      Score : [Score],
      RateCount : [RateCount],
      Image : [Image],
      Slug : [Slug],
      Author: this._formBuilder.group({
          AuthorId:[Author.AuthorId],
          AuthorName: [Author.AuthorName],
          AuthorStatus: [Author.AuthorStatus],
          Slug: [Author.Slug]
      }),    
      Genres: this._formBuilder.array([
         this.initGenres()          
      ]),
      Chapters: this._formBuilder.array([
          this.initChapters()
      ])  
   });
   
this.addGenres();
this.addChapters();
  }
addGenres(){
    const control = <FormArray>this.bookForm.controls['Genres'];
    control.push(this.initGenres());
  }

  
addChapters(){
  const control = <FormArray>this.bookForm.controls['Chapters'];
  control.push(this.initChapters());
}

}
