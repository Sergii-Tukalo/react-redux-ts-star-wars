import { FilmType, PersonType, VehiclesType } from '../../types';

const GET_ALL_PEOPLE = 'GET_ALL_PEOPLE';
const STATUS_ACTION = 'STATUS_ACTION';
const SORT_BY = 'SORT_BY';
const ANOTHER_PAGE = 'ANOTHER_PAGE';
const EMPTY_ARRAY = 'EMPTY_ARRAY';
const ERROR = 'ERROR';
const CHANGE_FILTER_STATUS = 'CHANGE_FILTER_STATUS';
const CATEGORY_FILTER = 'CATEGORY_FILTER';
const RESET_FILTER = 'RESET_FILTER';
const SET_EMPTY_ALL_PEOPLE = 'SET_EMPTY_ALL_PEOPLE';
const INPUT_SEARCH = 'INPUT_SEARCH';
const GET_ALL_ITEMS = 'GET_ALL_ITEMS';

export type RootStateAllPeopleType = {
  allPeople: PersonType[];
  status: boolean;
  sortBy: null | string;
  currentPage: number;
  error: boolean;
  filterCategory: FilmType[];
  countCategory: number;
  allItems: PersonType[] | FilmType[] | VehiclesType[];
  inputField: string;
};

const rootState: RootStateAllPeopleType = {
  allPeople: [],
  status: false,
  sortBy: 'popular',
  currentPage: 1,
  error: false,
  filterCategory: [],
  countCategory: 1,
  allItems: [],
  inputField: '',
};

type Actions = {
  type: string;
  payload: PersonType[];
  id: number;
};

export const reducerAllPeople = (state = rootState, action: Actions) => {
  switch (action.type) {
    case GET_ALL_PEOPLE:
      return {
        ...state,
        allPeople: Array.from(
          new Set([...state.allPeople, ...action.payload].map((obj) => obj.id))
        ).map((id) => {
          return [...state.allPeople, ...action.payload].find(
            (obj) => obj.id === id
          );
        }),
      };
    case GET_ALL_ITEMS:
      return {
        ...state,
        allItems: Array.from(
          new Set([...state.allItems, ...action.payload].map((obj) => obj.id))
        ).map((id) => {
          return [...state.allItems, ...action.payload].find(
            (obj) => obj.id === id
          );
        }),
      };
    case STATUS_ACTION:
      return {
        ...state,
        status: action.payload,
      };
    case SORT_BY:
      return {
        ...state,
        sortBy: action.payload,
      };
    case ANOTHER_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    case EMPTY_ARRAY:
      return {
        ...state,
        allPeople: [],
      };
    case CHANGE_FILTER_STATUS:
      return {
        ...state,
        filterCategory: state.filterCategory.map((item) => {
          if (item.id === action.id) {
            return {
              ...item,
              filter: action.payload ? action.payload : !item.filter,
            };
          } else {
            return {
              ...item,
            };
          }
        }),
      };
    case CATEGORY_FILTER:
      return {
        ...state,
        filterCategory: Array.from(
          new Set(
            [...state.filterCategory, ...action.payload].map((obj) => obj.id)
          )
        ).map((id) => {
          return [...state.filterCategory, ...action.payload].find(
            (obj) => obj.id === id
          );
        }),
      };
    case RESET_FILTER:
      return {
        ...state,
        filterCategory: state.filterCategory.map((item) => {
          item.filter = false;
          return item;
        }),
      };
    case SET_EMPTY_ALL_PEOPLE:
      return {
        ...state,
        allPeople: [],
      };
    case ERROR:
      return {
        ...state,
        error: true,
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

export const getAllPeopleAction = (payload: PersonType[]) => {
  return {
    type: GET_ALL_PEOPLE,
    payload,
  };
};

export const statusAction = (payload: boolean) => {
  return {
    type: STATUS_ACTION,
    payload,
  };
};

export const sortByAction = (payload: string) => {
  return {
    type: SORT_BY,
    payload,
  };
};

export const anotherPageBySortAction = (payload: number) => {
  return {
    type: ANOTHER_PAGE,
    payload,
  };
};

export const makeAllPeopleEmpty = () => {
  return {
    type: EMPTY_ARRAY,
  };
};

export const errorActionAllItems = () => {
  return {
    type: ERROR,
  };
};

export const changeFilterAction = (id: number, payload?: boolean) => {
  return {
    type: CHANGE_FILTER_STATUS,
    id,
    payload,
  };
};

export const filterCategoryAction = (payload: boolean) => {
  return {
    type: CATEGORY_FILTER,
    payload,
  };
};

export const resetFilterAction = () => {
  return {
    type: RESET_FILTER,
  };
};

export const setEmptyAllPeople = () => {
  return {
    type: SET_EMPTY_ALL_PEOPLE,
  };
};

export const searchInputAction = (payload: string) => {
  return {
    type: INPUT_SEARCH,
    payload,
  };
};

export const getAllItemsActions = (payload: string) => {
  return {
    type: GET_ALL_ITEMS,
    payload,
  };
};
