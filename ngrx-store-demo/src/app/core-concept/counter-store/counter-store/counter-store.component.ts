import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

@Component({
  selector: 'counter-store',
  templateUrl: './counter-store.component.html',
  styleUrls: ['./counter-store.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterStoreComponent implements OnInit {

  counter$: Observable<number>;

  constructor(private store: Store<number>) { 

    this.counter$ = this.store.select<number>('counter');

  }

  ngOnInit() {
  }

  increment() {

    this.store.dispatch({type: 'INCREMENT'});
  }

  decrement() {
    this.store.dispatch({type: 'DECREMENT'});
  }



}
