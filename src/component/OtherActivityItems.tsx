import React, { FC, useState } from 'react';
import { NavLink } from 'react-router-dom';

type PropsType = {
  id: number;
  name: string;
  category: string;
};

export const OtherActivityItems: FC<PropsType> = ({ id, name, category }) => {
  const [errorImg, setErrorImg] = useState<boolean>(false);
  return (
    <NavLink
      className="flex flex-col w-1/2 sm:w-auto justify-center items-center p-2 sm:p-4"
      to={`/${
        category === 'pilots' ||
        category === 'characters' ||
        category === 'residents'
          ? 'people'
          : category
      }/${id}`}
      key={id}
    >
      <img
        src={
          errorImg
            ? 'https://starwars-visualguide.com/assets/img/placeholder.jpg'
            : `https://starwars-visualguide.com/assets/img/${category}/${id}.jpg`
        }
        alt="..."
        className=" rounded-full w-24 h-24"
        onError={() => setErrorImg(true)}
      />
      <p className="text-sm sm:text-medium line-clamp-1 sm:line-clamp-none">
        {name}
      </p>
    </NavLink>
  );
};
