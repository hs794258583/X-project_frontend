import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-createReview',
  templateUrl: './createReview.component.html'
})
export class CreateReviewComponent implements OnInit {
  profile: any;

  constructor(private _auth: AuthService) {
    this.profile = JSON.parse(localStorage.getItem('profile'));
    console.log(this.profile);
   }


  ngOnInit() {
  }

}
