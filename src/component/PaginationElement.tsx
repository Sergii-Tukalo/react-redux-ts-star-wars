import { useSelector } from 'react-redux';
import { reducerType } from '../types';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { PaginationItem, Pagination } from '@mui/material';
import { useGetLocation } from '../api/useGetLocation';
import { anotherPageAction } from '../store/reducers/reducerPagination';
import { scrollToTop } from '../utils/scrollToTop';

export const PaginationElement = ({
  paginationType,
}: {
  paginationType: string;
}) => {
  const {
    mainState: { category },
    pagination: { currentPage },
  } = useSelector((state: reducerType) => state);
  let data: any = [];

  if (paginationType === 'people') {
    data = category;
  } else if (paginationType === 'starships') {
    data = category;
  } else if (paginationType === 'planets') {
    data = category;
  } else if (paginationType === 'films') {
    data = category;
  } else if (paginationType === 'vehicles') {
    data = category;
  } else if (paginationType === 'species') {
    data = category;
  }

  const dispatch = useDispatch();
  const countPages = Math.ceil(Number(data?.count) / 10);
  const location = useGetLocation();
  return (
    <div className="flex justify-center mb-16 mt-10">
      <Pagination
        className="pagination"
        color="primary"
        count={!countPages ? 10 : countPages}
        page={Number(location)}
        sx={{
          '& .MuiPaginationItem-ellipsis': {
            color: 'white',
            fontSize: '18px',
          },
        }}
        onChange={(e: any) => {
          let some: HTMLDivElement = e.target;
          if (some.innerText) {
            dispatch(anotherPageAction(Number(some.innerText)));
          } else {
            some.getAttribute('data-testid') === 'NavigateBeforeIcon'
              ? dispatch(anotherPageAction(currentPage - 1))
              : dispatch(anotherPageAction(currentPage + 1));
          }
          scrollToTop();
        }}
        renderItem={(item) => (
          <PaginationItem
            style={{
              color: 'white',
              fontSize: '18px',
            }}
            component={Link}
            to={`/${paginationType}/?page=${item.page}`}
            {...item}
          />
        )}
      />
    </div>
  );
};
