import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'reducer-redux-stlye',
	templateUrl: './reducer-redux-stlye.component.html',
	styleUrls: ['./reducer-redux-stlye.component.scss']
})
export class ReducerReduxStlyeComponent implements OnInit {

	constructor() { }

	ngOnInit() {
		// Reducer or state
		const person = (state = {}, action) => {
			switch (action.type) {
				case 'ADD_INFO':
					return Object.assign({}, state, action.payload);
				default:
					return state;
			}
		};
		// action
		const infoAction = { type: 'ADD_INFO', payload: { name: 'Royce', framework: 'Angular' }};
		const anotherPersonInfo = person(undefined, infoAction);
		console.log('REDUX STYLE VERSION', anotherPersonInfo);


		const hoursWorked = (state = 0, action) => {
			switch (action.type) {
				case 'ADD_HOUR':
					return state + 1;
				case 'SUBTRACT_HOUR':
					return state - 1;
				default:
					return state;
			}
		};
		// Reducers
		const myReducers = { person, hoursWorked };

		// Combined reducers
		const combineReducers = reducers => (state = {}, action) => {
			return Object.keys(reducers).reduce((nextState, key) => {
				nextState[key] = reducers[key](state[key], action);
				return nextState;
			}, {});
		}

		const rootReducer = combineReducers(myReducers);
		const firstState = rootReducer(undefined, {type: 'ADD_INFO', payload: {name: 'Royce'}});
		const secondState = rootReducer({hoursWorked: 10, person: {name: 'Joe'}}, {type: 'ADD_HOUR'});
		console.log('FIRST STATE', firstState);
		console.log('SECOND STATE', secondState);
	}

}
