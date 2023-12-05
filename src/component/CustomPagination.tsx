import { Button, Pagination, PaginationItem } from '@mui/material';
import { reducerType } from '../types';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { anotherPageBySortAction } from '../store/reducers/reducerAllPeople';

export const CustomPagination = ({ page }: { page?: number }) => {
  const breadcrumb = document.querySelector('.breadcrumb') as HTMLElement;
  const dispatch = useDispatch();
  const { allPeople, currentPage, status } = useSelector(
    (state: reducerType) => state.allPeople
  );

  const quantityPages = Math.ceil(
    page === 0 ? allPeople.length / 10 : Number(page) / 10
  );

  const scrollToTop = () => {
    window.scrollTo({
      top: breadcrumb?.offsetTop,
      behavior: 'smooth',
    });
  };

  console.log(page);

  return (
    <>
      {quantityPages !== 1
        ? status && (
            <div className="flex justify-center mb-16 mt-10">
              <Pagination
                className="pagination"
                color="primary"
                count={quantityPages}
                page={currentPage}
                sx={{
                  '& .MuiPaginationItem-ellipsis': {
                    color: 'white',
                    fontSize: '18px',
                  },
                }}
                onChange={(e: any) => {
                  let event: HTMLDivElement = e.target;
                  if (event.innerText) {
                    dispatch(anotherPageBySortAction(Number(event.innerText)));
                  } else {
                    event.getAttribute('data-testid') === 'NavigateBeforeIcon'
                      ? dispatch(anotherPageBySortAction(currentPage - 1))
                      : dispatch(anotherPageBySortAction(currentPage + 1));
                  }
                  scrollToTop();
                }}
                renderItem={(item) => (
                  <PaginationItem
                    style={{
                      color: 'white',
                      fontSize: '18px',
                    }}
                    component={Button}
                    {...item}
                  />
                )}
              />
            </div>
          )
        : null}
    </>
  );
};
