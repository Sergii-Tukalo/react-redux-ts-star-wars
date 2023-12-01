import { Categories, RootStateCategories } from '../../types';

const DATA = 'DATA';
const LOAD = 'LOAD';
const INPUT_SEARCH = 'INPUT_SEARCH';

const rootState: RootStateCategories = {
  loading: true,
  categories: [],
};

type Actions = {
  type: string;
  payload?: string;
};

export const reducerCategories = (state = rootState, action: Actions) => {
  switch (action.type) {
    case DATA:
      return {
        ...state,
        categories: action.payload,
      };
    case LOAD:
      return {
        ...state,
        loading: action.payload,
      };
    case INPUT_SEARCH:
      return {
        ...state,
        inputField: action.payload,
      };
    default:
      return state;
  }
};

export const setCategoriesAction = (payload: Categories[]) => {
  return {
    type: DATA,
    payload,
  };
};

export const loadingAction = (payload: boolean) => {
  return {
    type: LOAD,
    payload,
  };
};
