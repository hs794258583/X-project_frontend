import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ApiService } from '../../services/api.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
AuthService

@Component({
  selector: 'app-chap',
  templateUrl: './chap.component.html'
})
export class ChapComponent implements OnInit {
  sub:any;
  slug:string;
  constructor(
    private _auth: AuthService,
    private _api: ApiService,
    private _route: ActivatedRoute,
    private _router: Router,
  ) { }

  ngOnInit() {
      this.sub = this._route.params.subscribe(params => {
      this.slug = params['slug'];
    });
  }
  
}
