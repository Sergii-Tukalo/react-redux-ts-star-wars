import React, { FC } from 'react';
import { PersonType } from '../../types';
import { NavLink } from 'react-router-dom';
import { useNameGet } from '../../api/useNameGet';
import { Spinner } from '../readyComponents/Spinner';

type PropsType = {
  itemDetail: PersonType | null;
};

export const PeopleInfo: FC<PropsType> = ({ itemDetail }) => {
  const planetName = useNameGet(itemDetail?.homeworld);
  const speciesName = useNameGet(
    itemDetail?.species.length && itemDetail?.species
  );

  return (
    <div className="py-4 sm:pl-10 sm:w-1/2 lg:w-auto">
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        {itemDetail?.name}
      </h1>
      <div className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
        <div>
          <span className="font-mono mr-1 text-gray-500">Birdh Year:</span>
          <span className=""> {itemDetail?.birth_year}</span>
        </div>
        <div className="flex items-center">
          <span className="font-mono mr-1 text-gray-500">Species:</span>
          {itemDetail?.species.length === 0 ? (
            'unknown'
          ) : speciesName === '' ? (
            <Spinner width={5} />
          ) : (
            <NavLink
              to={`/species/${itemDetail?.species[0]
                .split('/')
                .filter((item: string) =>
                  !isNaN(+item) && item !== '' ? item : null
                )
                .join('')}`}
            >
              <span className="text-yellow-300">{speciesName}</span>
            </NavLink>
          )}
        </div>
        <div>
          <span className="font-mono mr-1 text-gray-500">Height:</span>
          {itemDetail?.height}cm
        </div>
        <div>
          <span className="font-mono mr-1 text-gray-500">Mass:</span>
          {itemDetail?.mass}kg
        </div>
        <div>
          <span className="font-mono mr-1 text-gray-500">Gender:</span>
          {itemDetail?.gender}
        </div>
        <div>
          <span className="font-mono mr-1 text-gray-500">Hair Color:</span>
          {itemDetail?.hair_color}
        </div>
        <div>
          <span className="font-mono mr-1 text-gray-500">Skin Color:</span>
          {itemDetail?.skin_color}
        </div>
        {itemDetail?.homeworld && (
          <div className="flex items-center">
            <span className="font-mono mr-1 text-gray-500">Homeworld:</span>
            <NavLink
              to={`/planets/${
                itemDetail?.homeworld[itemDetail?.homeworld.length - 2]
              }`}
            >
              <span className="text-yellow-300">
                {planetName === '' ? <Spinner width={3} /> : planetName}
              </span>
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
};
