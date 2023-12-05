import { FC, useState } from 'react';
import { PersonType } from '../types';
import { PeopleInfo } from './detailPages/PeopleInfo';
import { OtherActivity } from './OtherActivity';
import { FilmsInfo } from './detailPages/FilmsInfo';
import { PlanetsInfo } from './detailPages/PlanetsInfo';
import { StarshipsInfo } from './detailPages/StarshipsInfo';
import { VehiclesInfo } from './detailPages/VehiclesInfo';
import { SpeciesInfo } from './detailPages/SpeciesInfo';
import {
  isFilms,
  isPerson,
  isPlanet,
  isShips,
  isSpecies,
  isVehicles,
} from '../utils/isDetermine';
import { toUpperCaseFirstLetter } from '../utils/toUpperCaseFirstLetter';

type PropsType = {
  itemDetail: PersonType | null;
};

type relatedCategoriesType = {
  planets?: string[];
  people?: string[];
  films?: string[];
  vehicles?: string[];
  starships?: string[];
};

export const ItemDetailsInfo: FC<PropsType> = ({ itemDetail }) => {
  const [error, setError] = useState<boolean>(false);

  let relatedCategories: relatedCategoriesType = {};

  if (itemDetail) {
    Object.entries(itemDetail).map(([key, item]) => {
      if (Array.isArray(item) && item.length > 0) {
        return (relatedCategories[key as keyof typeof relatedCategories] =
          item);
      }
      return null;
    });
  }

  return (
    <div className="flex flex-wrap justify-center md:justify-start">
      <img
        className="sm:w-1/2 lg:w-auto"
        src={
          error
            ? 'https://starwars-visualguide.com/assets/img/placeholder.jpg'
            : itemDetail?.imgUrl
        }
        alt="avatar"
        onError={() => setError(true)}
      />
      {itemDetail?.category === 'people' && isPerson(itemDetail) && (
        <PeopleInfo itemDetail={itemDetail} />
      )}
      {itemDetail?.category === 'films' && isFilms(itemDetail) && (
        <FilmsInfo itemDetail={itemDetail} />
      )}
      {itemDetail?.category === 'planets' && isPlanet(itemDetail) && (
        <PlanetsInfo itemDetail={itemDetail} />
      )}
      {itemDetail?.category === 'starships' && isShips(itemDetail) && (
        <StarshipsInfo itemDetail={itemDetail} />
      )}
      {itemDetail?.category === 'vehicles' && isVehicles(itemDetail) && (
        <VehiclesInfo itemDetail={itemDetail} />
      )}
      {itemDetail?.category === 'species' && isSpecies(itemDetail) && (
        <SpeciesInfo itemDetail={itemDetail} />
      )}
      <div className="w-full mt-8">
        {Object.entries(relatedCategories).map(([key, item], index) => {
          return (
            <div
              className="mb-10 border-2 p-4 border-gray-500 rounded-md border-solid"
              key={index}
            >
              <h1 className="text-2xl border-b-2 pb-4 border-gray-500 font-bold dark:text-white mb-4">
                Related {toUpperCaseFirstLetter(key)}
              </h1>
              <OtherActivity
                urls={item}
                category={key}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
