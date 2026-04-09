import { Component, signal } from '@angular/core';

@Component({
  templateUrl: 'counter-page.html',
  styles: `
    button {
      padding: 5px;
      margin: 5px 10px;
      width: 75px;
    }
  `
})
export class CounterPage {
  initial = 0;
  counter = this.initial;
  counterSignal = signal(this.initial);

  increaseBy(value: number){
    this.counter += value;
    this.counterSignal.update( c => c + value);
  }

  decreaseBy(value: number){
    this.counter -= value;
    this.counterSignal.update( c => c - value);
  }

  resetBy(){
    this.counter = this.initial;
    this.counterSignal.set(this.initial);
  }
}
