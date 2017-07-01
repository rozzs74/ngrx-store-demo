import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Component({
	selector: 'subject-dispatcher',
	templateUrl: './subject-dispatcher.component.html',
	styleUrls: ['./subject-dispatcher.component.scss']
})
export class SubjectDispatcherComponent implements OnInit {

	constructor() { }

	ngOnInit() {
		
		const mySubject = new Subject();

		const subscriberOne = mySubject.subscribe((value) => {
			console.log('Subscriber one', value);
		});

		const subscriberTwo = mySubject.subscribe((value) => {
			console.log('Subscriber two', value);
		});

		mySubject.next('FIRST VALUE');
		mySubject.next('SECOND VALUE');


		const dispatcher = new Dispatcher();

		const subsOne = dispatcher.subscribe((value) => {
			console.log('Dispacther one subscription', value);
		});

		const subsTwo = dispatcher.subscribe((value) => {
			console.log('Dispacther two subscription', value);
		});

		dispatcher.dispatch('FIRST DISPACTHED VALUE');
		dispatcher.dispatch('SECOND DISPACTHED VALUE');

	}

}

class Dispatcher extends Subject<any>{
	dispatch(value: any) : void {
		this.next(value);	
	}



}
