import { CheckBox } from './readyComponents/CheckBox';
import { useGetTypeFilter } from '../api/useGetTypeFilter';
import { FilmType } from '../types';
import { useDispatch } from 'react-redux';
import { Spinner } from '@material-tailwind/react';
import { resetFilterAction } from '../store/reducers/reducerAllPeople';
import { useSearchParams } from 'react-router-dom';

export const Filter = ({ type }: { type: string }) => {
  const dispatch = useDispatch();
  const { filterCategory } = useGetTypeFilter(type);
  let [searchParams, setSearchParams] = useSearchParams();
  const filter = searchParams.get('filter') as string;

  return (
    <div className="col-span-12 flex flex-wrap xl:flex-row items-baseline xl:items-center mb-4">
      {!filterCategory.length ? (
        <div className="flex">
          <div className="mr-4">Filter by Film:</div>
          <Spinner />
        </div>
      ) : (
        <>
          <div className="whitespace-no-wrap xl:basis-28">Filter by Film:</div>
          <ul className="flex flex-wrap items-center xl:flex-1">
            {filterCategory.map((item: FilmType) => {
              return (
                <CheckBox
                  key={item.id}
                  item={item}
                />
              );
            })}
            <li className="flex items-center sm:mr-2 sm:last:ml-4 w-full sm:w-auto">
              {!!filter && (
                <button
                  type="button"
                  className={`flex justify-center sm:inline-flex mt-4 hover:bg-yellow-500 sm:mt-0 w-full sm:w-auto items-center px-2 py-1 sm:px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg focus:ring-4 focus:outline-none`}
                  onClick={() => {
                    dispatch(resetFilterAction());
                    searchParams.delete('filter');
                    setSearchParams(searchParams);
                  }}
                >
                  Reset
                </button>
              )}
            </li>
          </ul>
        </>
      )}
    </div>
  );
};
