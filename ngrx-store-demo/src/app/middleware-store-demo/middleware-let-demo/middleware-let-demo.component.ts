import { Component, OnInit } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs/Rx';
import { Store } from '@ngrx/store';

@Component({
  selector: 'middleware-let-demo',
  templateUrl: './middleware-let-demo.component.html',
  styleUrls: ['./middleware-let-demo.component.scss']
})
export class MiddlewareLetDemoComponent implements OnInit {
  subsriber;
  constructor(private store: Store<number>) { }

  ngOnInit() {
     this.subsriber = this.store.select('person');
  
  }

}

class Dispatcher extends Subject<any> {
  dispatch(value: any): void {
    this.next(value);
  }
}

class Stores extends BehaviorSubject<any> {
  constructor(
    private dispatcher,
    private reducer,
    preMiddleware,
    postMiddleware,
    initialState = {}
  ) {
    super(initialState);
    this.dispatcher
        .let(preMiddleware)
        .scan((state, action) => this.reducer(state, action), initialState)
        .let(postMiddleware)
        .subscribe(state => super.next(state));
        
  
  }
  select(key: string) {
    return this.map(state => state[key]);
  }
}

const preMiddleware = obs => { return obs.do(val => console.log('ACTION', val))};
const postMiddleware = obs => { return obs.do(val => console.log('STATE', val))};
