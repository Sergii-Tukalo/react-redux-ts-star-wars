import React, { useEffect } from 'react';
import axios from 'axios';
import { SpeciesType, reducerType } from '../types';
import {
  errorActionAllItems,
  filterCategoryAction,
} from '../store/reducers/reducerAllPeople';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

export const useGetTypeFilter = (type: string) => {
  const dispatch = useDispatch();
  const { countCategory } = useSelector(
    (state: reducerType) => state.allPeople
  );
  const getAllPeople = async (numPage: number = 1) => {
    const defaultUrl = `https://swapi.dev/api/${type}/?page=${numPage}`;
    try {
      const res = await axios.get(defaultUrl);
      let newData = res.data.results.map((item: SpeciesType) => {
        const id = Number(item.url.split('/')[item.url.split('/').length - 2]);

        return {
          ...item,
          id,
          category: type,
          filter: false,
          count: res.data.count,
        };
      });
      dispatch(filterCategoryAction(newData));
    } catch (error: any) {
      console.log(error.message);
      dispatch(errorActionAllItems());
    }
  };
  useEffect(() => {
    getAllPeople();
  }, [countCategory]);

  const data = useSelector((state: reducerType) => state.allPeople);
  return data;
};
