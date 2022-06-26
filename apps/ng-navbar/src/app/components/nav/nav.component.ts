import { Component, OnInit } from '@angular/core';
import { Observable } from 'windowed-observable';

@Component({
  selector: 'mfe-lab-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  // constructor() {}
  counter = 0;

  ngOnInit(): void {
    const counter$ = new Observable('counter');
    counter$.subscribe(value => {
      if (value === 'plus') {
        this.counter++;
      } else {
        this.counter--;
      }
    });
  }
}
