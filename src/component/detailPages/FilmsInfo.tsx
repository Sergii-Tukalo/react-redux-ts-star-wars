import React, { FC } from 'react';
import { FilmType } from '../../types';

type PropsType = {
  itemDetail: FilmType | null;
};

export const FilmsInfo: FC<PropsType> = ({ itemDetail }) => {
  return (
    <div
      className="py-4 sm:pl-10 sm:w-1/2 lg:w-auto"
      style={{ flex: 2 }}
    >
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        {itemDetail?.title}
      </h1>
      <div className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
        <div>
          <span className="font-mono mr-1 text-gray-500">Date Created:</span>
          <span className=""> {itemDetail?.release_date}</span>
        </div>
        <div>
          <span className="font-mono mr-1 text-gray-500">Director:</span>
          <span className="">{itemDetail?.director}</span>
        </div>
        <div>
          <span className="font-mono mr-1 text-gray-500">Producer(s):</span>
          {itemDetail?.producer}
        </div>
        <div className="w-50">
          <span className="font-mono mr-1 text-gray-500">Opening Crawl:</span>
          {itemDetail?.opening_crawl}
        </div>
      </div>
    </div>
  );
};
