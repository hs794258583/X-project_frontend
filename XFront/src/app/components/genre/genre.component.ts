import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ApiService } from '../../services/api.service';
import { SlugService } from '../../services/slug.service';
import { Story } from '../../model/story.model';
import { ActivatedRoute, Router } from '@angular/router';
AuthService

@Component({
  selector: 'app-home',
  styles: [`
    .results {
      height: 100%;
      overflow: scroll;
    }
  `],
  templateUrl: './genre.component.html'
})
export class GenreComponent implements OnInit {
  stories:Story[] = [];
  sum = 12;
  start = 1;
  throttle = 300;
  scrollDistance = 1;
  sub:any;
  param:string;
  constructor(
    private _auth: AuthService,
    private _api: ApiService,
    private _route: ActivatedRoute,
    private _router: Router 
  ) { }

  ngOnInit() {
     this.sub = this._route.params.subscribe(params => {
      this.getStoryList(this.start, params['slug']);
      this.param = params['slug'];
    });
  }

  getStoryList(start:number, param:string){
     // Author: Linh Ho
     let end = start + this.sum - 1;
      this._api.getApi("http://api.xtale.net/api/Stories/genre/"+param)
                .subscribe(data => this.stories = this.stories.concat(data),
                           error => this.stories = <any>error);
  }
  
  onScrollDown () {
    this.start = this.start + this.sum;
    this.getStoryList(this.start, this.param);
  }

}
