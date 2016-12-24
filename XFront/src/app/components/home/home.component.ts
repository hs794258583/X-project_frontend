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
  sum:number = 10;
  start:number = 1;
  throttle:number = 300;
  scrollDistance:number = 1;
  dataStatus:boolean = true;
  
  constructor(
    private _auth: AuthService,
    private _api: ApiService
  ) { }

  ngOnInit() {
    this.getStoryList(this.start);
  }

  getStoryList(start:number){
     // Author: Linh Ho
     let end:number = start + this.sum - 1;
      this._api.getApi("http://api.xtale.net/api/Stories/range/"+start+"/"+end)
                .subscribe(data => this.stories = this.stories.concat(data),
                           error => this.dataStatus = false);
      //check data null
     this._api.getApi("http://api.xtale.net/api/Stories/range/"+(start+this.sum)+"/"+(end+this.sum))
                .subscribe(data => {
                    if(data.length<1){
                      this.dataStatus = false;
                    }
                },error => this.dataStatus = false);
  }
  
  onScrollDown () {
    if(this.dataStatus == true){
      console.log(this.start);
      this.start = this.start + this.sum;
      this.getStoryList(this.start);
    }
  }
}
