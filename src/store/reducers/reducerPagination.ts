import { RootStatePaginationType } from "../../types";

const ANOTHER_PAGE = "ANOTHER_PAGE";

const rootState: RootStatePaginationType = {
  currentPage: 1,
};

type Actions = {
  type: string;
  payload?: string;
};

export const reducerPagination = (state = rootState, action: Actions) => {
  switch (action.type) {
    case ANOTHER_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    default:
      return state;
  }
};

export const anotherPageAction = (payload: number) => {
  return {
    type: ANOTHER_PAGE,
    payload,
  };
};
