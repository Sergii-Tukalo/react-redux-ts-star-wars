import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { StarshipType, reducerType } from '../types';
import { useSelector } from 'react-redux';
import { getPeopleAction, loadingAction } from '../store/reducers/reducers';
import { useLocation } from 'react-router-dom';

export const useRequest = (url: string) => {
  const dispatch = useDispatch();
  const { currentPage } = useSelector((state: reducerType) => state.pagination);
  const { pathname } = useLocation();

  const data = useSelector((state: reducerType) => state);

  useEffect(() => {
    const getData = async () => {
      try {
        dispatch(loadingAction(true));
        const res = await axios.get(url);
        let newData = res.data.results.map((item: StarshipType) => {
          const id = Number(
            item.url.split('/')[item.url.split('/').length - 2]
          );
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
        dispatch(
          getPeopleAction({
            count: res.data.count,
            next: res.data.next,
            previous: res.data.previous,
            results: newData,
          })
        );
        dispatch(loadingAction(false));
      } catch (error: any) {
        console.log(error.message);
        dispatch(loadingAction(false));
      }
    };
    getData();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [currentPage, dispatch, pathname, url]);
  return data;
};
