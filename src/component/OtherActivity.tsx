import axios from 'axios';
import React, { FC, useEffect, useState } from 'react';
import { Spinner } from './readyComponents/Spinner';
import { Error } from './readyComponents/Error';
import { OtherActivityItems } from './OtherActivityItems';

type PropsType = {
  urls: string[];
  category: string;
};

type relatedCategoryType = {
  name: string;
  id: number;
};

export const OtherActivity: FC<PropsType> = ({ urls, category }) => {
  let [show, setShow] = useState<boolean>(false);
  let [stop, setStop] = useState<boolean>(true);
  let [loading, setLoading] = useState<boolean>(true);
  let [error, setError] = useState<boolean>(false);
  let [relatedCategory, setRelatedCategory] = useState<relatedCategoryType[]>(
    []
  );

  const getData = async (url: string) => {
    try {
      setLoading(true);
      const res = await axios.get(url);
      const id = res.data.url
        .split('/')
        .filter((item: string) => !isNaN(+item))
        .join('');

      setRelatedCategory((state) => [
        ...state,
        {
          name: res.data.title || res.data.name,
          id,
        },
      ]);
    } catch (error: any) {
      setError(true);
      setLoading(false);
      console.log(error.message);
    }
  };

  if (urls.length === relatedCategory.length / 2 && stop) {
    setLoading(false);
    setStop(false);
  }

  useEffect(() => {
    for (const iterator of urls) {
      getData(iterator);
    }
  }, []);

  const uniqueArray = relatedCategory.filter((item, index, self) => {
    return self.findIndex((obj) => obj.name === item.name) === index;
  });

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          {error ? (
            <Error message={'Something went wrong, try again later'} />
          ) : (
            <div className="flex flex-wrap items-end ">
              {uniqueArray.map(({ id, name }: relatedCategoryType, index) => {
                if (index < 5) {
                  return (
                    <OtherActivityItems
                      key={id}
                      id={id}
                      name={name}
                      category={category}
                    />
                  );
                } else if (show) {
                  return (
                    <OtherActivityItems
                      key={id}
                      id={id}
                      name={name}
                      category={category}
                    />
                  );
                }
              })}
              {uniqueArray.length > 5
                ? !show && (
                    <button
                      type="button"
                      className="h-8 text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-6 py-1 text-center mr-2 mb-4 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
                      onClick={() => setShow(true)}
                    >
                      show more
                    </button>
                  )
                : null}
            </div>
          )}
        </>
      )}
    </>
  );
};
