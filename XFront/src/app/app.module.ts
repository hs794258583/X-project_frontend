import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { routing, appRoutingProviders } from './app.routing';
import { AUTH_PROVIDERS } from 'angular2-jwt'
import { AuthService } from './services/auth.service';
import { AuthGuard } from './auth.guard';
import { ApiService } from './services/api.service';
import { ReviewComponent } from './components/review/review.component';
import { InfiniteScrollModule } from 'angular2-infinite-scroll';
import { RankingComponent } from './components/ranking/ranking.component';
import { GenreComponent } from './components/genre/genre.component';
import { BookInfoComponent } from './components/book/bookInfo.component';
import { ChapComponent } from './components/book/chap.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    ReviewComponent,
    RankingComponent,
    GenreComponent,
    BookInfoComponent,
    ChapComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    InfiniteScrollModule
  ],
  providers: [appRoutingProviders, AuthService, AUTH_PROVIDERS, AuthGuard, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
