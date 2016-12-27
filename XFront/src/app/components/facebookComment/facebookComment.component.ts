import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-facebookComment',
  template: ''
})
export class FacebookComment {
    @Input() router:string;
    @Input() param:string;
    href = "http://xtale.net/"+this.router+"/"+this.param;
    numposts = 5;

  constructor() {}
}
