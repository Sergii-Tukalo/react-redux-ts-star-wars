import { FC } from 'react';
import { VehiclesType } from '../../types';

type PropsType = {
  itemDetail: VehiclesType | null;
};

export const VehiclesInfo: FC<PropsType> = ({ itemDetail }) => {
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
          <span className="font-mono mr-1 text-gray-500">Model:</span>
          <span className=""> {itemDetail?.model}</span>
        </div>
        <div>
          <span className="font-mono mr-1 text-gray-500">Manufacturer:</span>
          <span className="">{itemDetail?.manufacturer}</span>
        </div>
        <div>
          <span className="font-mono mr-1 text-gray-500">Class:</span>
          {itemDetail?.vehicle_class}
        </div>
        <div>
          <span className="font-mono mr-1 text-gray-500">Cost:</span>
          {itemDetail?.cost_in_credits} credits
        </div>
        <div>
          <span className="font-mono mr-1 text-gray-500">Speed:</span>
          {itemDetail?.max_atmosphering_speed}km/h
        </div>
        <div>
          <span className="font-mono mr-1 text-gray-500">Length:</span>
          {itemDetail?.length}m
        </div>
        <div>
          <span className="font-mono mr-1 text-gray-500">Cargo Capacity:</span>
          {itemDetail?.cargo_capacity}metric tons
        </div>
        <div>
          <span className="font-mono mr-1 text-gray-500">Mimimum Crew:</span>
          {itemDetail?.crew}
        </div>
        <div>
          <span className="font-mono mr-1 text-gray-500">Passengers:</span>
          {itemDetail?.passengers}
        </div>
      </div>
    </div>
  );
};
