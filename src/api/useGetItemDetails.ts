import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadingAction, setItemDetails } from '../store/reducers/reducers';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { reducerType } from '../types';
import { useLocation } from 'react-router-dom';

export const useGetItemDetails = (typeDetail: string, id: number) => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const getPerson = async () => {
    try {
      dispatch(loadingAction(true));
      const res = await axios(`https://swapi.dev/api/${typeDetail}/` + id);
      const newItem = {
        ...res.data,
        category: typeDetail,
        imgUrl: `https://starwars-visualguide.com/assets/img/${
          typeDetail === 'people' ? 'characters' : typeDetail
        }/${id}.jpg`,
      };
      dispatch(setItemDetails(newItem));
      dispatch(loadingAction(false));
    } catch (error: any) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getPerson();
  }, [pathname]);

  const data = useSelector((state: reducerType) => state.mainState);

  return data;
};
