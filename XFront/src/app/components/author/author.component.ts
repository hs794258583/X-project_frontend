import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ApiService } from '../../services/api.service';
AuthService

@Component({
  selector: 'app-author',
  styles: [`
    .results {
      height: 100%;
      // overflow: scroll;
    }
  `],
  templateUrl: './author.component.html'
})
export class AuthorComponent implements OnInit {

  stories:any[] = [];
  datas = [];
  constructor(
    private _auth: AuthService,
    private _api: ApiService
  ) { }

  ngOnInit() {
    this.getStoryList();
  }

  getStoryList(){
     // Author: Linh Ho
      // this._api.getApi("http://localhost:4200/assets/smock/api/storyInHome.json")
      //           .subscribe(data => this.stories.push(<any[]>data),
      //                      error => this.stories = <any>error);
      this._api.getApi("http://localhost:4200/assets/smock/api/storyInHome.json")
                .subscribe(data => this.stories = data,
                           error => this.stories = <any>error);
    }
  
  array = [];
  sum = 100;
  throttle = 300;
  scrollDistance = 1;
  title = 'Hello InfiniteScroll v0.2.8, Ng2 Final';

  
  addItems(startIndex, endIndex) {
    for (let i = 0; i < this.sum; ++i) {
      this.array.push(i);
    }
  }
  onScrollDown () {
    console.log('scrolled!!');
    this.getStoryList();
  }

}
