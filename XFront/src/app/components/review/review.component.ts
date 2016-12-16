import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
AuthService

@Component({
  selector: 'app-home',
  templateUrl: './review.component.html'
})
export class ReviewComponent implements OnInit {

  constructor(private _auth: AuthService) { }

  ngOnInit() {

  }

}
