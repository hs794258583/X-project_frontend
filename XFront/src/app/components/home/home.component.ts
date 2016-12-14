import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
AuthService

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _auth: AuthService) { }

  ngOnInit() {
  }

}
