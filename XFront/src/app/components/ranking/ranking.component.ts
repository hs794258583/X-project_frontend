import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
AuthService

@Component({
  selector: 'app-home',
  templateUrl: './ranking.component.html'
})
export class RankingComponent implements OnInit {

  constructor(private _auth: AuthService) { }

  ngOnInit() {
  }

}
