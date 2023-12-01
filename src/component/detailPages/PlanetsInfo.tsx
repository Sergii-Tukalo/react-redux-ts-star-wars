import React, { FC } from 'react';
import { PlanetType } from '../../types';

type PropsType = {
  itemDetail: PlanetType | null;
};

export const PlanetsInfo: FC<PropsType> = ({ itemDetail }) => {
  return (
    <div
      className="py-4 sm:pl-10 sm:w-1/2 lg:w-auto"
      style={{ flex: 2 }}
    >
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        {itemDetail?.name}
      </h1>
      <div className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
        <div>
          <span className="font-mono mr-1 text-gray-500">Population:</span>
          <span className=""> {itemDetail?.population}</span>
        </div>
        <div>
          <span className="font-mono mr-1 text-gray-500">Rotation Period:</span>
          <span className="">{itemDetail?.rotation_period} days</span>
        </div>
        <div>
          <span className="font-mono mr-1 text-gray-500">Orbital Period:</span>
          {itemDetail?.orbital_period} days
        </div>
        <div>
          <span className="font-mono mr-1 text-gray-500">Diameter:</span>
          {itemDetail?.diameter} km
        </div>
        <div>
          <span className="font-mono mr-1 text-gray-500">Gravity:</span>
          {itemDetail?.gravity}
        </div>
        <div>
          <span className="font-mono mr-1 text-gray-500">Terrain:</span>
          {itemDetail?.terrain}
        </div>
        <div>
          <span className="font-mono mr-1 text-gray-500">Surface Water:</span>
          {itemDetail?.surface_water}
        </div>
        <div>
          <span className="font-mono mr-1 text-gray-500">Climate: Arid:</span>
          <span className="">{itemDetail?.climate}</span>
        </div>
      </div>
    </div>
  );
};
