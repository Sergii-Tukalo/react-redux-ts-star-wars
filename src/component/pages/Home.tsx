import { NavLink, useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { reducerType } from '../../types';
import { Spinner } from '../readyComponents/Spinner';
import { Banner } from '../main/Banner';
import { useDispatch } from 'react-redux';
import { anotherPageAction } from '../../store/reducers/reducerPagination';
import {
  resetFilterAction,
  searchInputAction,
  setEmptyAllPeople,
  statusAction,
} from '../../store/reducers/reducerAllPeople';

export const Home = () => {
  const dispatch = useDispatch();
  let [, setSearchParams] = useSearchParams();
  const { categories, loading } = useSelector(
    (state: reducerType) => state.categories
  );

  return (
    <div>
      <Banner
        url="https://www.starwars.com/series/star-wars-ahsoka"
        img="https://lumiere-a.akamaihd.net/v1/images/ahsoka-is-here-hero-c-desktop_40630036.jpeg?region=0,0,1600,686"
      />
      <h1 className="mb-4 md:mb-16 flex justify-center text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Categories
      </h1>
      <div className="">
        {loading ? (
          <div
            className="w-full flex justify-center"
            style={{ height: '50vh' }}
          >
            <Spinner />
          </div>
        ) : (
          <ul className="grid sm:grid-cols-2 gap-5 md:gap-10">
            {categories.map(({ id, imgUrl, url }) => {
              return (
                <NavLink
                  to={`/${id}`}
                  className=" relative overflow-hidden bg-cover bg-no-repeats"
                  key={id}
                  onClick={() => {
                    dispatch(anotherPageAction(1));
                    dispatch(statusAction(false));
                    dispatch(resetFilterAction());
                    dispatch(setEmptyAllPeople());
                    dispatch(searchInputAction(''));
                    setSearchParams('');
                  }}
                >
                  <div className="transition duration-300 ease-in-out hover:scale-110">
                    <img
                      className="w-full"
                      src={
                        id === 'people'
                          ? 'https://starwars-visualguide.com/assets/img/categories/character.jpg'
                          : imgUrl
                      }
                      alt={id}
                    />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <span className="text-yellow-400 opacity-70 mb-4 text-3xl font-extrabold  md:text-5xl lg:text-6xl">
                        {id}
                      </span>
                    </div>
                  </div>
                </NavLink>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};
