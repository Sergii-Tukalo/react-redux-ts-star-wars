import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { reducerType } from '../types';
import { Spinner } from './readyComponents/Spinner';
import { ArrowSvg } from '../svg/ArrowSvg';
import { isFilms } from '../utils/isDetermine';
import { toUpperCaseFirstLetter } from '../utils/toUpperCaseFirstLetter';
type PropsType = {
  pathname: string;
};

export const MyBreadcrumbs: React.FC<PropsType> = ({ pathname }) => {
  const { itemDetails, loading } = useSelector(
    (state: reducerType) => state.mainState
  );

  const arrPaths = pathname
    .split('/')
    .filter((item: string) => item !== '' ?? item);

  return (
    <nav
      className="flex"
      aria-label="Breadcrumb"
    >
      <ol className="inline-flex items-center space-x-1 md:space-x-3 text-base">
        <li className="inline-flex items-baseline">
          <NavLink
            to="/"
            className="inline-flex items-baseline font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
          >
            <svg
              className="w-3 h-3 mr-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
            </svg>
            Home
          </NavLink>
        </li>
        {arrPaths.length === 1 ? (
          <li>
            <div className="flex items-baseline">
              <ArrowSvg />
              <span className="ml-1 font-medium text-gray-100  dark:text-gray-100 ">
                {pathname.split('/')[1][0].toUpperCase() +
                  pathname.split('/')[1].slice(1)}
              </span>
            </div>
          </li>
        ) : (
          arrPaths.map((item: string) => {
            if (item !== arrPaths[arrPaths.length - 1]) {
              return (
                <li key={item}>
                  <div className="flex items-baseline">
                    <ArrowSvg />
                    <NavLink
                      to={`/${item}`}
                      className="ml-1 font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white"
                    >
                      {toUpperCaseFirstLetter(item)}
                    </NavLink>
                  </div>
                </li>
              );
            } else if (item !== '') {
              return (
                <li key={item}>
                  <div className="flex items-baseline">
                    <ArrowSvg />
                    <span className="ml-1 font-medium text-gray-600  md:ml-2 dark:text-gray-100">
                      {loading ? (
                        <div className="flex items-baseline">
                          <Spinner width={3} />
                          <span className="ml-2"> loading</span>
                        </div>
                      ) : itemDetails?.name === undefined &&
                        isFilms(itemDetails) ? (
                        itemDetails?.title
                      ) : (
                        itemDetails?.name
                      )}
                    </span>
                  </div>
                </li>
              );
            }
            return null;
          })
        )}
      </ol>
    </nav>
  );
};
