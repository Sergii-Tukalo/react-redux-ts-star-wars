import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { reducerType } from '../types';

export const useGetLocation = () => {
  const { search } = useLocation();
  const { currentPage } = useSelector((state: reducerType) => state.pagination);
  const numberFromLocal: number | string =
    search === '' ? currentPage : search[search.length - 1];
  return numberFromLocal;
};
