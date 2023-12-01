import React, { ChangeEvent, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import {
  anotherPageBySortAction,
  changeFilterAction,
  statusAction,
} from '../../store/reducers/reducerAllPeople';
import { useDispatch } from 'react-redux';
import { FilmType, reducerType } from '../../types';
import { useSelector } from 'react-redux';

export const CheckBox = ({ item }: { item: FilmType }) => {
  const { search } = useLocation();
  const { filterCategory } = useSelector(
    (state: reducerType) => state.allPeople
  );
  let [searchParams, setSearchParams] = useSearchParams();
  const filter = searchParams.get('filter') as string;
  const mySearch = searchParams.get('search') as string;
  const dispatch = useDispatch();
  const checkedItem = filterCategory.filter((item) => item.filter && item);
  useEffect(() => {
    if (filter !== null && filter.split('--').includes(item.title)) {
      dispatch(changeFilterAction(item.id, true));
      dispatch(statusAction(true));
    }
  }, []);

  const checkboxHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target instanceof HTMLInputElement && e.target.checked) {
      console.log(search.includes('page'));
      searchParams.set(
        'filter',
        checkedItem.map((item) => item.title).join('--') === ''
          ? item.title
          : checkedItem.map((item) => item.title).join('--') + '--' + item.title
      );
      setSearchParams(searchParams);
      dispatch(changeFilterAction(item.id));
      dispatch(anotherPageBySortAction(1));
      filter === null && dispatch(statusAction(true));
    } else {
      dispatch(anotherPageBySortAction(1));
      searchParams.set(
        'filter',
        filter
          .split('--')
          .filter((el) => el !== item.title)
          .join('--')
      );
      setSearchParams(searchParams);
      if (filter.split('--').length === 1) {
        searchParams.delete('filter');
        setSearchParams(searchParams.toString());
        !mySearch && dispatch(statusAction(false));
      }
      dispatch(changeFilterAction(item.id));
    }
  };

  return (
    <li
      className="flex items-center mr-2"
      onClick={() => search.includes('page') && setSearchParams('')}
    >
      <label
        className="relative flex items-center p-2 lg:p-3 rounded-full cursor-pointer"
        htmlFor={`ripple-on-${item.id}`}
        data-ripple-dark="true"
      >
        <input
          id={`ripple-on-${item.id}`}
          type="checkbox"
          checked={!!filter && filter.includes(item.title)}
          className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-blue-500 checked:bg-blue-500 checked:before:bg-blue-500 hover:before:opacity-10"
          onChange={(e) => checkboxHandler(e)}
        />
        <div className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3.5 w-3.5"
            viewBox="0 0 20 20"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="1"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
      </label>
      <label
        className="mt-px sm:font-normal font-light cursor-pointer select-none"
        htmlFor={`ripple-on-${item.id}`}
      >
        {item.title}
      </label>
    </li>
  );
};
