import React, { FC } from 'react';
import { MyBreadcrumbs } from './BreadCrumbs';
import { ItemDetailsInfo } from './ItemDetailsInfo';
import { useGetItemDetails } from '../api/useGetItemDetails';
import { useLocation, useParams } from 'react-router-dom';
import { Skeleton } from './readyComponents/Skeleton';
import { Banner } from './main/Banner';

type PropsType = {
  category: string;
};

export const ItemPageDetail: FC<PropsType> = ({ category }) => {
  const { itemId } = useParams();
  const { pathname } = useLocation();

  const { loading, itemDetails } = useGetItemDetails(category, Number(itemId));

  return (
    <div>
      <Banner
        url="https://www.starwars.com/series"
        img="https://lumiere-a.akamaihd.net/v1/images/mando-key-art-b-hero-desktop_1f8ff986.jpeg?region=0,0,1600,680&width=1200"
      />
      <MyBreadcrumbs pathname={pathname} />
      {loading ? <Skeleton /> : <ItemDetailsInfo itemDetail={itemDetails} />}
    </div>
  );
};
