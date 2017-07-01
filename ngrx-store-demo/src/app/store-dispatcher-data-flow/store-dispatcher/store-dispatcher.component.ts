import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
  selector: 'store-dispatcher',
  templateUrl: './store-dispatcher.component.html',
  styleUrls: ['./store-dispatcher.component.scss']
})
export class StoreDispatcherComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const dispatcher = new Dispatcher();
    const store = new Store(dispatcher, 'INITIAL STATE');
    const subscriber = store.subscribe((value) => {
      console.log('Value from store', value);
    });
    dispatcher.dispatch('DISPACHED VALUE');
    store.dispatch('ANOTHER DISPACTCHED VALUE');
    const actionStream$ = new Subject();
    actionStream$.subscribe(store);
    actionStream$.next('NEW ACTION');


  }



}

class Dispatcher extends Subject<any> {
  dispatch(value: any): void {
    this.next(value);
  }
}

class Store extends BehaviorSubject<any> {
  constructor(private dispatcher, initialState) {
    super(initialState);
    this.dispatcher
          //pre-middleware
          //reducers
          //post-middleware
          .subscribe((state) => super.next(state));
  }

  dispatch(value: any) {
    this.dispatcher.dispatch(value);
  }

  next(value) {
    this.dispatcher.dispatch(value);
  }
}

