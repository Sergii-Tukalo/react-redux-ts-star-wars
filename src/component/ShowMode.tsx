import React, { Dispatch, FC } from 'react';
import { OneDots } from '../svg/OneDots';
import { TwoDots } from '../svg/TwoDots';
import { FiveDots } from '../svg/FiveDots';

type TypeProps = {
  setDesktopModeToShow: Dispatch<React.SetStateAction<number>>;
  setMobileModeToShow: Dispatch<React.SetStateAction<number>>;
  desktopModeToShow: number;
  mobileModeToShow: number;
};

export const ShowMode: FC<TypeProps> = ({
  mobileModeToShow,
  desktopModeToShow,
  setMobileModeToShow,
  setDesktopModeToShow,
}) => {
  return (
    <div className="flex gap-x-2">
      <span
        className="lg:hidden cursor-pointer flex items-center justify-center"
        onClick={() => setMobileModeToShow(1)}
      >
        <OneDots active={mobileModeToShow === 1} />
      </span>
      <span
        className="lg:hidden cursor-pointer flex items-center justify-center"
        onClick={() => setMobileModeToShow(2)}
      >
        <TwoDots active={mobileModeToShow === 2} />
      </span>
      <span
        className="hidden cursor-pointer items-center justify-center lg:flex"
        onClick={() => {
          setDesktopModeToShow(2);
        }}
      >
        <TwoDots active={desktopModeToShow === 2} />
      </span>
      <span
        className="hidden cursor-pointer items-center justify-center lg:flex text-yellow-400"
        onClick={() => {
          setDesktopModeToShow(5);
        }}
      >
        <FiveDots active={desktopModeToShow === 5} />
      </span>
    </div>
  );
};
