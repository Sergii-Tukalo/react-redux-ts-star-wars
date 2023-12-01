import React, { FC, useState } from 'react';
import { useGetLocation } from '../../api/useGetLocation';
import { useLocation, useSearchParams } from 'react-router-dom';
import { MyBreadcrumbs } from '../BreadCrumbs';
import { Spinner } from '../readyComponents/Spinner';
import { PaginationElement } from '../PaginationElement';
import { CardItem } from '../CardItem';
import { useRequest } from '../../api/useRequest';
import { CustomPagination } from '../CustomPagination';
import { Sort } from '../Sort';
import { sortCondition } from '../../utils/sortCondition';
import { changeSort } from '../../utils/changeSort';
import { useGetAllPeople } from '../../api/useGetAllPeople';
import { Banner } from '../main/Banner';
import { Filter } from '../Filter';
import { ShowMode } from '../ShowMode';
import { NoFoundMessage } from '../NoFoundMessage';

type PropsType = {
  type: string;
};

export const CommonPage: FC<PropsType> = ({ type }) => {
  const page = useGetLocation();
  const {
    mainState: { loading, category },
  } = useRequest(
    `https://swapi.dev/api/${type}/?page=${isNaN(Number(page)) ? 1 : page}`
  );
  const countPages = Math.ceil(Number(category?.count) / 10);
  const location = useGetLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const postQuery = searchParams.get('sort') as string;
  const filter = searchParams.get('filter') as string;
  const search = searchParams.get('search') as string;
  const { allPeople, status, currentPage, filterCategory, error } =
    useGetAllPeople(type);
  const { pathname } = useLocation();

  changeSort(postQuery);
  sortCondition(allPeople, postQuery);

  const urlFilter = filterCategory
    .filter((item) => {
      if (filter !== null) {
        if (filter.split('--').includes(item.title)) {
          return item;
        }
      }
    })
    .map((item) => item.url);

  const filteredByCategory = allPeople
    .filter((item) => {
      if (urlFilter.length !== 0 && urlFilter.length === 1) {
        return item.films.includes(urlFilter.join(''));
      } else {
        return item.films.filter((el) => !!urlFilter.includes(el)).length;
      }
    })
    .filter((item) => {
      if (!!search) {
        return item.name.toLowerCase().includes(search ? search : '');
      } else {
        return item;
      }
    });

  const searchResult = allPeople.filter((item) => {
    if (!!search) {
      return item.name.toLowerCase().includes(search ? search : '');
    } else {
      return item;
    }
  });
  const [desktopModeToShow, setDesktopModeToShow] = useState<number>(5);
  const [mobileModeToShow, setMobileModeToShow] = useState<number>(2);
  // console.log(allPeople);
  // console.log(filteredByCategory);
  // console.log(searchResult);
  return (
    <>
      <Banner
        url="https://www.starwars.com/films"
        img="https://i.redd.it/4azjyokvjci51.jpg"
      />
      <div className="flex items-center justify-between mb-6 sm:mb-2">
        <MyBreadcrumbs pathname={pathname} />
        <ShowMode
          desktopModeToShow={desktopModeToShow}
          mobileModeToShow={mobileModeToShow}
          setDesktopModeToShow={setDesktopModeToShow}
          setMobileModeToShow={setMobileModeToShow}
        />
      </div>
      <div className="grid gap-2 grid-cols-12">
        <Sort type={type} />
        {type !== 'films' && <Filter type="films" />}
        {location === 1 && loading ? (
          <div
            className="w-full col-span-12 justify-center"
            style={{ height: '50vh' }}
          >
            <Spinner />
          </div>
        ) : (
          <>
            {status ? (
              isNaN(countPages) ||
              allPeople.length < Number(category?.count) ? (
                <div
                  className="w-full col-span-12 justify-center"
                  style={{ height: '50vh' }}
                >
                  <Spinner />
                </div>
              ) : (
                (!searchResult.length && !filteredByCategory.length && (
                  <NoFoundMessage noFoundWord={search} />
                )) || (
                  <ul
                    className={`col-span-12 grid grid-cols-${mobileModeToShow} gap-5 lg:grid-cols-${desktopModeToShow} md:mb-5`}
                  >
                    {(filteredByCategory.length !== 0
                      ? filteredByCategory
                      : allPeople
                    )
                      .map((item) => {
                        return (
                          <CardItem
                            key={item.id}
                            item={item}
                            category={type}
                          />
                        );
                      })
                      .filter((el: any) => {
                        if (!!search) {
                          return el.props.item.name
                            .toLowerCase()
                            .includes(search);
                        } else {
                          return el;
                        }
                      })
                      .slice((currentPage - 1) * 10, currentPage * 10)}
                  </ul>
                )
              )
            ) : (
              <ul
                className={`col-span-12 grid grid-cols-${mobileModeToShow} gap-5 lg:grid-cols-${desktopModeToShow} md:mb-5`}
              >
                {category?.results.map((item) => {
                  return (
                    <CardItem
                      key={item.id}
                      item={item}
                      category={type}
                    />
                  );
                })}
              </ul>
            )}
          </>
        )}
        <div className="col-span-12">
          {!status
            ? countPages > 1 && <PaginationElement paginationType={type} />
            : !!searchResult.length && (
                <CustomPagination
                  page={filteredByCategory.length || searchResult.length}
                />
              )}
        </div>
      </div>
    </>
  );
};