import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ApiService } from '../../services/api.service';
AuthService

@Component({
  selector: 'app-createBook',
  templateUrl: './createbook.component.html'
})
export class CreateBookComponent implements OnInit {
  constructor(
    private _auth: AuthService,
    private _api: ApiService
  ) { }

  ngOnInit() {
  }
  
}
