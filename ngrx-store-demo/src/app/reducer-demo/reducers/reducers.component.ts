import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reducers',
  templateUrl: './reducers.component.html',
  styleUrls: ['./reducers.component.scss']
})
export class ReducersComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    const numberArray = [1,2,3];
	
	const total = numberArray.reduce((accumulator, current) => accumulator + current);
	console.log('Total', total);

	const personInfo = [{name: 'Joe'}, {age: 31}, {birthday: '1/1/1985'}];

	const fullPerson = personInfo.reduce((accumulator, current) => {
		return Object.assign({}, accumulator, current);
	});

	console.log('Full person', fullPerson);
  }

}
