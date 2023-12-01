import { PersonsType, RelatedCategory, RootStateType } from '../../types';

const GET_PEOPLE = 'GET_PEOPLE';
const LOADING = 'LOADING';
const GET_PERSON = 'GET_PERSON';
const SET_RELATED_CATEGORY = 'SET_RELATED_CATEGORY';

const rootState: RootStateType = {
  loading: true,
  category: null,
  itemDetails: null,
  relatedCategory: null,
};

type Actions = {
  type: string;
  payload?: string;
};

export const reducer = (state = rootState, action: Actions) => {
  switch (action.type) {
    case GET_PEOPLE:
      return {
        ...state,
        category: action.payload,
      };
    case LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case GET_PERSON:
      return {
        ...state,
        itemDetails: action.payload,
      };
    case SET_RELATED_CATEGORY:
      return {
        ...state,
        relatedCategory: action.payload,
      };
    default:
      return state;
  }
};

export const getPeopleAction = (payload: PersonsType) => {
  return {
    type: GET_PEOPLE,
    payload,
  };
};

export const loadingAction = (payload: boolean) => {
  return {
    type: LOADING,
    payload,
  };
};

export const setItemDetails = (payload: any) => {
  return {
    type: GET_PERSON,
    payload,
  };
};

export const setRelatedCategory = (payload: RelatedCategory) => {
  return {
    type: SET_RELATED_CATEGORY,
    payload,
  };
};
