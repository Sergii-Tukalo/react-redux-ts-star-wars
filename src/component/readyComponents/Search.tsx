import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useGetCategories } from '../../api/useGetCategories';
import { NavLink, useLocation, useSearchParams } from 'react-router-dom';
import {
  anotherPageBySortAction,
  searchInputAction,
  setEmptyAllPeople,
  statusAction,
} from '../../store/reducers/reducerAllPeople';
import { Categories } from '../../types';
import { SearchChooseCategory } from '../SearchChooseCategory';
import { Spinner } from '@material-tailwind/react';

export const Search = ({
  closeBurger,
}: {
  closeBurger: Dispatch<SetStateAction<boolean>>;
}) => {
  const dispatch = useDispatch();
  const [searchInWhichCategory, setSearchInWhichCategory] =
    useState<string>('');
  const [, setShowAlert] = useState<boolean>(false);
  let [searchParams, setSearchParams] = useSearchParams();
  const mySearch = searchParams.get('search') as string;
  const { categories } = useGetCategories('https://swapi.dev/api/');
  const { pathname } = useLocation();
  const [inputValue, setInputValue] = useState<string>('');

  useEffect(() => {
    !!mySearch &&
      dispatch(statusAction(true)) &&
      dispatch(searchInputAction(mySearch));
  }, [dispatch, mySearch]);
  console.log(searchInWhichCategory);

  const firstButtonRef: any = useRef(null);
  const handleSecondButtonClick = () => {
    // Trigger click on the first button
    if (firstButtonRef.current) {
      firstButtonRef.current.click();
    }
  };
  return (
    <div className=" flex justify-center">
      <div className="relative flex justify-between w-full lg:w-auto">
        <input
          className="relative m-0 -mr-0.5 block w-full rounded-l border-2 border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal  text-neutral-100 outline-none transition duration-200 ease-in-out   focus:text-neutral-400  focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="button-addon3"
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
        />
        <button
          className="flex"
          onClick={() => {
            setShowAlert(true);
            searchParams.set('search', inputValue);
            setSearchParams(searchParams);
            dispatch(statusAction(true));
            dispatch(searchInputAction(inputValue));
            dispatch(anotherPageBySortAction(1));
            setInputValue('');
            searchInWhichCategory !== pathname.slice(1) &&
              dispatch(setEmptyAllPeople());
            handleSecondButtonClick();
          }}
          type="button"
          disabled={!inputValue || !searchInWhichCategory ? true : false}
        >
          {!inputValue || !searchInWhichCategory ? (
            <div className="rounded-r text-gray-400 border-gray-400 border-2 border-primary px-6 py-2 text-xs font-medium uppercase text-primary transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0">
              Search
            </div>
          ) : (
            <NavLink
              className="rounded-r border-2 border-primary px-6 py-2 text-xs font-medium uppercase text-primary transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5  focus:ring-0"
              id="NavLink-addon3"
              data-te-ripple-init
              to={`${searchInWhichCategory}`}
              ref={firstButtonRef}
              onClick={() => closeBurger(false)}
            >
              Search
            </NavLink>
          )}
        </button>
        <ul className="flex flex-col absolute opacity-95 top-9 bg-black w-full">
          {!!inputValue && !searchInWhichCategory && (
            <li className="text-red-500 px-3 pt-3">
              please choose one option below
            </li>
          )}
          {inputValue.length >= 1 &&
            (categories.length === 0 ? (
              <div className="p-4">
                <Spinner />
              </div>
            ) : (
              categories.map((item: Categories) => {
                if (item.id !== 'films') {
                  return (
                    <SearchChooseCategory
                      key={item.id}
                      name={item.id}
                      searchInWhichCategory={searchInWhichCategory}
                      onChildClick={(data: string) =>
                        setSearchInWhichCategory(data)
                      }
                    />
                  );
                }
                return null;
              })
            ))}
        </ul>
      </div>
    </div>
  );
};
