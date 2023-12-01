import { combineReducers } from 'redux';
import { reducer } from './reducers';
import { reducerPagination } from './reducerPagination';
import { reducerAllPeople } from './reducerAllPeople';
import { reducerCategories } from './reducerCategories';

export const combineReducer = combineReducers({
  mainState: reducer,
  pagination: reducerPagination,
  allPeople: reducerAllPeople,
  categories: reducerCategories,
});
