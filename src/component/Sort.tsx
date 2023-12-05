import { ChangeEvent, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  searchInputAction,
  statusAction,
} from '../store/reducers/reducerAllPeople';
import { useLocation, useSearchParams } from 'react-router-dom';
import { defineTypeSortText } from '../utils/defineTypeSortText';
import { useSelector } from 'react-redux';
import { reducerType } from '../types';

export const Sort = ({ type }: { type: string }) => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const postQuery = searchParams.get('sort') as string;
  const { search } = useLocation();
  const { inputField } = useSelector((state: reducerType) => state.allPeople);
  useEffect(() => {
    !!postQuery && dispatch(statusAction(true));
    search === '' && dispatch(statusAction(false));
  }, [dispatch, postQuery, search]);

  const sortHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    searchParams.set('sort', e.target.value);
    setSearchParams(searchParams);
    dispatch(statusAction(true));
  };

  searchParams.delete('search');

  return (
    <div className="col-span-12 mb-4 md:mb-0 flex flex-wrap items-center">
      <label
        htmlFor="sort"
        className="text-lg mr-2"
      >
        sort by:
      </label>
      <select
        className="bg-black border-white border-2 rounded border-solid mr-4"
        name="sort"
        id="sort"
        onChange={(e) => sortHandler(e)}
      >
        <option value="choose">choose sort</option>
        <option value="low-height">
          {defineTypeSortText(type)}
          (low - height)
        </option>
        <option value="height-low">
          {defineTypeSortText(type)}
          (height - low)
        </option>
      </select>
      {!!inputField && (
        <div className="flex items-center mt-4 md:mt-0">
          <span className="mr-2">Search by:</span> "{' '}
          <span className="text-blue-500">{inputField}</span> "
          <button
            className="text-2xl flex justify-center self-center w-10 h-10"
            onClick={() => {
              dispatch(searchInputAction(''));
              searchParams.delete('search');
              setSearchParams(searchParams.toString());
              !search && dispatch(statusAction(false));
            }}
          >
            &times;
          </button>
        </div>
      )}
    </div>
  );
};
