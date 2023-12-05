import { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { reducerType } from '../types';
import { Spinner } from './readyComponents/Spinner';
import { NavLink } from 'react-router-dom';
import {
  isFilms,
  isPlanet,
  isShips,
  isSpecies,
  isVehicles,
  isPerson,
} from '../utils/isDetermine';

type PropsCard = {
  item: any;
  category: string;
};

export const CardItem: FC<PropsCard> = ({ item, category }) => {
  const { name, imgUrl, id } = item;
  const { loading } = useSelector((state: reducerType) => state.mainState);
  const [error, setError] = useState<boolean>(false);

  return (
    <li className="flex flex-col relative border rounded-lg shadow bg-gray-800 border-gray-700">
      {loading && (
        <div className="bg-gray-900 bg-opacity-75 absolute top-0 bottom-0 right-0 left-0 flex justify-center items-center">
          <Spinner />
        </div>
      )}
      <NavLink
        className="my-auto"
        to={`/${category}/${id}`}
      >
        <img
          className="w-full"
          src={
            error
              ? 'https://starwars-visualguide.com/assets/img/placeholder.jpg'
              : imgUrl
          }
          alt="StarShip"
          loading="lazy"
          onError={() => setError(true)}
        />
      </NavLink>
      <div className="p-2 sm:p-5 mt-auto">
        <NavLink to={`/${category}/${id}`}>
          <h5 className="mb-1 sm:mb-2 text-md sm:text-2xl font-bold tracking-tight text-white">
            {name}
          </h5>
        </NavLink>
        <div>
          <p className="mb-2 md:self-end text-sm sm:text-lg text-gray-400">
            {isPerson(item) && category.includes('people') && (
              <>Height: {item.height}</>
            )}
            {isSpecies(item) && category.includes('species') && (
              <>Average height: {item.average_height}</>
            )}
            {isShips(item) && category.includes('starships') && (
              <>Length: {item.length}</>
            )}
            {isVehicles(item) && category.includes('vehicles') && (
              <>Length: {item.length}</>
            )}
            {isPlanet(item) && category.includes('planets') && (
              <>Diameter: {item.diameter}</>
            )}
            {isFilms(item) && category.includes('films') && (
              <>Release date: {item.release_date}</>
            )}
          </p>
          <NavLink
            to={`/${category}/${id}`}
            className="inline-flex items-center px-2 py-1 sm:px-3 sm:py-2 text-sm font-medium text-center text-black bg-yellow-300 rounded-lg hover:bg-yellow-500 focus:ring-4 focus:outline-none"
          >
            Read more
            <svg
              className="w-3.5 h-3.5 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </NavLink>
        </div>
      </div>
    </li>
  );
};
