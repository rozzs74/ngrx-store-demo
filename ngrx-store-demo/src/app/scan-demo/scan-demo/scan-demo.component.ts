import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Rx';

@Component({
  selector: 'scan-demo',
  templateUrl: './scan-demo.component.html',
  styleUrls: ['./scan-demo.component.scss']
})
export class ScanDemoComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    const testSubject = new Subject();
    const basicScan = testSubject.scan((acc: any, curr: any) => acc + curr, 0);
    const subscribe = basicScan.subscribe(val => console.log('Accumulated value', val));

    testSubject.next(1);
    testSubject.next(2);
    testSubject.next(3);


    const testSubjectTwo = new Subject();
    const objectScan = testSubjectTwo.scan((acc: any, curr: any) => Object.assign({}, acc, curr));
    const subscribe2 = objectScan.subscribe(val => console.log('Accumulated object', val));

    testSubject.next({name: 'Joe'});
    testSubjectTwo.next({age: 30});
    testSubjectTwo.next({frameworl: 'Angular 2'});
  

  }

}
