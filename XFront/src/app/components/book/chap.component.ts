import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ApiService } from '../../services/api.service';
AuthService

@Component({
  selector: 'app-chap',
  templateUrl: './chap.component.html'
})
export class ChapComponent implements OnInit {
  constructor(
    private _auth: AuthService,
    private _api: ApiService
  ) { }

  ngOnInit() {
  }
  
}
