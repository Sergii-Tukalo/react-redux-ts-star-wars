import {
  loadingAction,
  setCategoriesAction,
} from '../store/reducers/reducerCategories';
import axios from 'axios';
import { useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { reducerType } from '../types';
import { useSelector } from 'react-redux';

export const useGetCategories = (url: string) => {
  const dispatch = useDispatch();

  const getDataCategories = useCallback(async () => {
    try {
      dispatch(loadingAction(true));

      const res = await axios.get(url);

      let newItem = Object.entries(res.data).map(([id, item]) => {
        return {
          url: item as string,
          id,
          imgUrl: `https://starwars-visualguide.com/assets/img/categories/${id}.jpg`,
        };
      });
      dispatch(setCategoriesAction(newItem));
      dispatch(loadingAction(false));
    } catch (error: any) {
      console.log(error.message);
      dispatch(loadingAction(false));
    }
  }, [dispatch, url]);

  const data = useSelector((state: reducerType) => state.categories);

  useEffect(() => {
    getDataCategories();
  }, [getDataCategories]);

  return data;
};
