import React, { FC } from 'react';
import { SpeciesType } from '../../types';

type PropsType = {
  itemDetail: SpeciesType | null;
};

export const SpeciesInfo: FC<PropsType> = ({ itemDetail }) => {
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
          <span className="font-mono mr-1 text-gray-500">Classification:</span>
          <span className=""> {itemDetail?.classification}</span>
        </div>
        <div>
          <span className="font-mono mr-1 text-gray-500">Designation:</span>
          <span className="">{itemDetail?.designation}</span>
        </div>
        <div>
          <span className="font-mono mr-1 text-gray-500">Language:</span>
          {itemDetail?.language}
        </div>
        <div>
          <span className="font-mono mr-1 text-gray-500">Avg Lifespan:</span>
          {itemDetail?.average_lifespan}
        </div>
        <div>
          <span className="font-mono mr-1 text-gray-500">Avg Height:</span>
          {itemDetail?.average_height}
        </div>
        <div>
          <span className="font-mono mr-1 text-gray-500">Hair Color(s):</span>
          {itemDetail?.hair_colors}
        </div>
        <div>
          <span className="font-mono mr-1 text-gray-500">Skin Color(s):</span>
          {itemDetail?.skin_colors}
        </div>
        <div>
          <span className="font-mono mr-1 text-gray-500">Eye Color(s):</span>
          {itemDetail?.eye_colors}
        </div>
      </div>
    </div>
  );
};
