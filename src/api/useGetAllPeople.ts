import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadingAction } from '../store/reducers/reducers';
import axios from 'axios';
import { PersonType, reducerType } from '../types';
import {
  errorActionAllItems,
  getAllPeopleAction,
} from '../store/reducers/reducerAllPeople';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useRequest } from './useRequest';

export const useGetAllPeople = (type: string) => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const { status, sortBy } = useSelector(
    (state: reducerType) => state.allPeople
  );

  // const { mainState } = useRequest(
  //   'https://swapi.dev/api/' + type + '/?page=1'
  // );
  // const countRequests = Math.ceil(Number(mainState.category?.count) / 10);
  // console.log(countRequests);

  const getAllPeople = async (numPage: number) => {
    const defaultUrl = `https://swapi.dev/api/${type}/?page=${numPage}`;
    try {
      dispatch(loadingAction(true));
      const res = await axios.get(defaultUrl);
      let newData = res.data.results.map((item: PersonType) => {
        const id = Number(item.url.split('/')[item.url.split('/').length - 2]);

        return {
          ...item,
          id,
          category: pathname
            .split('/')
            .filter((item) => item.length > 1)
            .join(''),
          imgUrl: `https://starwars-visualguide.com/assets/img${
            pathname.split('/').includes('people') ? '/characters' : pathname
          }/${id}.jpg`,
        };
      });
      dispatch(getAllPeopleAction(newData));
      dispatch(loadingAction(false));
    } catch (error: any) {
      console.log(error.message);
      dispatch(errorActionAllItems());
      dispatch(loadingAction(false));
    }
  };

  useEffect(() => {
    if (status) {
      for (let i = 1; i <= 9; i++) {
        getAllPeople(i);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status, sortBy]);

  const data = useSelector((state: reducerType) => state.allPeople);
  return data;
};
