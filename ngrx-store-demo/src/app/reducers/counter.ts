import { ActionReducer, Action } from '@ngrx/store';
import { compose } from '@ngrx/core/compose';

/* Serves as states */

/*
export const counter: ActionReducer<number> = (state: number = 0, action: Action) => {
    switch(action.type) {
        
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
};  */
/*
export const counter: ActionReducer<number> = function(state: number = 0, action: Action): number {
        switch(action.type) {
        
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            
}
*/


export function counter(state: number = 0, action: Action) {

    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
} 
