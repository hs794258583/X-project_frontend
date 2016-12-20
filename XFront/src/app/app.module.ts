import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
import { CreateBookComponent } from './components/book/createbook.component';
import { SlugService } from './services/slug.service';
import { ReviewComponent } from './components/review/review.component';
import { ReviewDetailComponent } from './components/review/review-detail/reviewDetail.component';
import { ReviewEditComponent } from './components/review/review-edit/review-edit.component';
import { ReviewListComponent } from './components/review/review-list/review-list.component';
import { ReviewStartComponent } from './components/review/review-start.component';
import { ReviewService } from './components/review/review.service';
import { ReviewItemComponent } from './components/review/review-list/review-item.component';

import { CKEditorModule } from 'ng2-ckeditor';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,

    ReviewComponent,
    ReviewEditComponent,
    ReviewDetailComponent,
    ReviewListComponent,
    ReviewStartComponent,
    ReviewItemComponent,

    RankingComponent,
    GenreComponent,
    BookInfoComponent,
    ChapComponent,
    AuthorComponent,
    CreateBookComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    ReactiveFormsModule,
    InfiniteScrollModule,
    CKEditorModule
  ],
  providers: [appRoutingProviders, AuthService, AUTH_PROVIDERS, AuthGuard, ApiService, SlugService, ReviewService],
  bootstrap: [AppComponent]
})
export class AppModule { }
