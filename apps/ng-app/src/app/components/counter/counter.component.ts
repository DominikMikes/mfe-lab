import { Component } from '@angular/core';
import { Observable } from 'windowed-observable';

@Component({
  selector: 'mfe-lab-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent {
  counter$ = new Observable('counter');

  countUp() {
    this.counter$.publish('plus');
  }
}
