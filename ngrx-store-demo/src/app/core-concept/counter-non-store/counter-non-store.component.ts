import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'counter-non-store',
  templateUrl: './counter-non-store.component.html',
  styleUrls: ['./counter-non-store.component.scss']
})
export class CounterNonStoreComponent implements OnInit {
  counter: number = 0;
  constructor() { }

  ngOnInit() {
  }

  increment() {
    this.counter += 1;
  }

  decrement() {
    this.counter -= 1;
  }


}
