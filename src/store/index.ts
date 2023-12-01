import { createStore } from 'redux';
import { combineReducer } from './reducers';

export const store = createStore(combineReducer);
