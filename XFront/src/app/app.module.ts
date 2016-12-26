import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {APP_BASE_HREF} from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { routing, appRoutingProviders } from './app.routing';
import { AUTH_PROVIDERS } from 'angular2-jwt'
import { AuthService } from './services/auth.service';
import { AuthGuard } from './auth.guard';
import { ApiService } from './services/api.service';
import { InfiniteScrollModule } from 'angular2-infinite-scroll';
import { RankingComponent } from './components/ranking/ranking.component';
import { GenreComponent } from './components/genre/genre.component';
import { BookInfoComponent } from './components/book/bookInfo.component';
import { ChapComponent } from './components/book/chap.component';
import { AuthorComponent } from './components/author/author.component';
import { SlugService } from './services/slug.service';
import { ReviewComponent } from './components/review/review.component';
import { ReviewEditComponent } from './components/review/review-edit/review-edit.component';
import { CKEditorModule } from 'ng2-ckeditor';
import { ReviewDetailComponent } from './components/review/reviewDetail.component';
import { ReviewService } from './components/review/review.service';
import { Ng2UploaderModule } from 'ng2-uploader';
import { BookCreateComponent } from './components/book/book-create/book-create.component';

import { StarComponent } from './components/star/star.component';
import { BookService } from './components/book/book.service';
import { ChapCreateComponent } from './components/book/chap-create/chap-create.component';
import { ChapEditComponent } from './components/book/chap-edit/chap-edit.component';
import { ChapService } from './components/book/chap-create/chap.service';
import { NgUploaderModule } from 'ngx-uploader';
import { UploadService } from './components/review/review-edit/upload.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    ReviewComponent,
    ReviewEditComponent,
    RankingComponent,
    GenreComponent,
    BookInfoComponent,
    ChapComponent,
    AuthorComponent,
    ReviewComponent,
    ReviewDetailComponent,
    BookCreateComponent,
    StarComponent,  
    ChapCreateComponent,
    ChapEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    ReactiveFormsModule,
    InfiniteScrollModule,
    CKEditorModule,
    NgUploaderModule,
     
  ],
  providers: [appRoutingProviders, AuthService, AUTH_PROVIDERS, AuthGuard,
   ApiService, SlugService, ReviewService, BookService, ChapService, UploadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
