import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ApiService } from '../../services/api.service';
import { SlugService } from '../../services/slug.service';
AuthService

@Component({
  selector: 'app-home',
  styles: [`
    #results {
      clear: block;
      height: 100%;
      overflow: scroll;
    }
  `],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
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
                .subscribe(data => this.stories = this.stories.concat(data),
                           error => this.stories = error);
                           console.log(this.stories);
    }
  
  throttle = 300;
  scrollDistance = 1;
  onScrollDown () {
    var ele = document.getElementById("results");
      console.log('scrolled!!');
      console.log(ele.offsetHeight);
      this.getStoryList();
  }

}
