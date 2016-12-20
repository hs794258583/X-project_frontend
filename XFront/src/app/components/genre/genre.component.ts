import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ApiService } from '../../services/api.service';
AuthService

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html'
})
export class GenreComponent implements OnInit {
  stories: any[];
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
                .subscribe(data => this.stories = data,
                           error => this.stories = <any>error);
                
    }

}
