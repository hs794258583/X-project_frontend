import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ApiService } from '../../services/api.service';
import { SlugService } from '../../services/slug.service';
import { Story } from '../../model/story.model';
AuthService

@Component({
  selector: 'app-home',
  styles: [`
    .results {
      height: 100%;
      overflow: scroll;
    }
  `],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  stories:Story[] = [];
  sum = 12;
  start = 1;
  throttle = 300;
  scrollDistance = 1;
  
  constructor(
    private _auth: AuthService,
    private _api: ApiService
  ) { }

  ngOnInit() {
    this.getStoryList(this.start);
  }

  getStoryList(start:number){
     // Author: Linh Ho
     let end = start + this.sum - 1;
      this._api.getApi("http://api.xtale.net/api/Stories/range/"+start+"/"+end)
                .subscribe(data => this.stories = this.stories.concat(data),
                           error => this.stories = <any>error);
  }
  
  onScrollDown () {
    this.start = this.start + this.sum;
    this.getStoryList(this.start);
  }

}
