import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
  selector: 'behavior-subject',
  templateUrl: './behavior-subject.component.html',
  styleUrls: ['./behavior-subject.component.scss']
})
export class BehaviorSubjectComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const store = new Store('Initial Value');
    const storeSubscriberOne  = store.subscribe((value) => {
      console.log('STORE SUBSCRIBER ONE', value);
    });
    const storeSubscriberTwo = store.subscribe((value) => {
      console.log('STORE SUBSCRIBER TWO', value);
    });

    store.next('FIRST VALUE');
  }

}


class Store extends BehaviorSubject<any> {

  constructor(initialState: any){
    super(initialState);
  }

}



