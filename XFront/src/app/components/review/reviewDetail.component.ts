import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-reviewDetail',
  templateUrl: './reviewDetail.component.html'
})
export class ReviewDetailComponent implements OnInit {
  profile: any;

  constructor(private _auth: AuthService) {
    this.profile = JSON.parse(localStorage.getItem('profile'));
    console.log(this.profile);
   }


  ngOnInit() {
  }

}
