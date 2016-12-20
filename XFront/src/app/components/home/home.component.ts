import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ApiService } from '../../services/api.service';
import { SlugService } from '../../services/slug.service';
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
  stories = [];
  datas = [];
  sum = 100;
  throttle = 300;
  scrollDistance = 1;
  
  constructor(
    private _auth: AuthService,
    private _api: ApiService
  ) { }

  ngOnInit() {
    this.getStoryList();
  }

  getStoryList(){
     // Author: Linh Ho
      this._api.getApi("http://localhost:4200/assets/smock/api/storyInHome.json")
                .subscribe(data => this.stories = this.stories.concat(data),
                           error => this.stories = <any>error);
    }
  
  onScrollDown () {
    console.log('scrolled!!');
    this.getStoryList();
  }

}
