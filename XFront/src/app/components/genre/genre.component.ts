import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
AuthService

@Component({
  selector: 'app-home',
  templateUrl: './genre.component.html'
})
export class GenreComponent implements OnInit {

  constructor(private _auth: AuthService) { }

  ngOnInit() {
  }

}
