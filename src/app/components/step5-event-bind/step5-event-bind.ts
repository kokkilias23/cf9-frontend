import { Component } from '@angular/core';

@Component({
  selector: 'app-step5-event-bind',
  imports: [],
  templateUrl: './step5-event-bind.html',
  styleUrl: './step5-event-bind.css',
})
export class Step5EventBind {
  times:number = 0;

  incrementTimes() {
    this.times++;
    console.log("Increment>>>",this.times);
    // this.times = this.times+1;
  }

  decrementTimes(){
    this.times--;
    // this.times=this.times-1;
  }
}
