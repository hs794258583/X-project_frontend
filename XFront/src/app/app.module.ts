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
import { SlugService } from './services/slug.service';
import { ReviewComponent } from './components/review/review.component';
import { ReviewEditComponent } from './components/review/review-edit/review-edit.component';
import { CKEditorModule } from 'ng2-ckeditor';


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
    AuthorComponent
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
  providers: [appRoutingProviders, AuthService, AUTH_PROVIDERS, AuthGuard, ApiService, SlugService],
  bootstrap: [AppComponent]
})
export class AppModule { }
