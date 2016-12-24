import { Component, OnChanges, Input } from '@angular/core';
@Component({
  selector: 'app-star',
  templateUrl: './star.component.html'
})
export class StarComponent implements OnChanges {
    @Input() score: number;
    @Input() rateCount: number;
    star:any[];
    starBorder:any[];
  constructor() { }
    ngOnChanges(): void {
        let numberStar = Math.round(this.score / this.rateCount);
        if(numberStar>5){
            numberStar = 5;
        }
        this.star = Array(numberStar).fill(1);
        this.starBorder = Array(5 - numberStar).fill(0);
    }  
}
