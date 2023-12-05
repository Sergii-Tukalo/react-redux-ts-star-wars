import React from 'react';
import { Navbar, MobileNav, IconButton } from '@material-tailwind/react';
import { NavLink, useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { anotherPageAction } from '../../store/reducers/reducerPagination';
import {
  resetFilterAction,
  searchInputAction,
  setEmptyAllPeople,
  statusAction,
} from '../../store/reducers/reducerAllPeople';
import { changeSort } from '../../utils/changeSort';
import { Search } from '../readyComponents/Search';

export const Navigation = () => {
  const [openNav, setOpenNav] = React.useState(false);
  let [, setSearchParams] = useSearchParams();

  const dispatch = useDispatch();
  const goToPage = () => {
    dispatch(anotherPageAction(1));
    dispatch(statusAction(false));
    changeSort('popular');
    dispatch(resetFilterAction());
    dispatch(setEmptyAllPeople());
    dispatch(searchInputAction(''));
    setSearchParams('');
  };

  React.useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 1024 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center 2xl:gap-6 md:ml-4">
      <li
        className="nav-item no-underline text-end text-xl group transition duration-300"
        onClick={() => {
          goToPage();
          window.innerWidth < 1024 && setOpenNav(!openNav);
        }}
      >
        <NavLink to="/people">People</NavLink>
        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-yellow-400"></span>
      </li>
      <li
        className="nav-item no-underline text-end text-xl group transition duration-300"
        onClick={() => {
          goToPage();
          window.innerWidth < 1024 && setOpenNav(!openNav);
        }}
      >
        <NavLink to="/starships">Ships</NavLink>
        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-yellow-400"></span>
      </li>
      <li
        className="nav-item no-underline text-end text-xl group transition duration-300"
        onClick={() => {
          goToPage();
          window.innerWidth < 1024 && setOpenNav(!openNav);
        }}
      >
        <NavLink to="/planets">Planets</NavLink>
        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-yellow-400"></span>
      </li>
      <li
        className="nav-item no-underline text-end text-xl group transition duration-300"
        onClick={() => {
          goToPage();
          window.innerWidth < 1024 && setOpenNav(!openNav);
        }}
      >
        <NavLink to="/films">Films</NavLink>
        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-yellow-400"></span>
      </li>
      <li
        className="nav-item no-underline text-end text-xl group transition duration-300"
        onClick={() => {
          goToPage();
          window.innerWidth < 1024 && setOpenNav(!openNav);
        }}
      >
        <NavLink to="/vehicles">Vehicles</NavLink>
        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-yellow-400"></span>
      </li>
      <li
        className="nav-item no-underline text-end text-xl group transition duration-300"
        onClick={() => {
          goToPage();
          window.innerWidth < 1024 && setOpenNav(!openNav);
        }}
      >
        <NavLink to="/species">Species</NavLink>
        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-yellow-400"></span>
      </li>
    </ul>
  );

  return (
    <Navbar className="sticky grid bg-transparent border-transparent top-0 z-10 h-max max-w-full rounded-none pt-4 lg:py-8">
      <div className="flex flex-wrap lg:flex-nowrap items-center justify-between text-blue-gray-900">
        <NavLink
          to="/"
          className="mr-4 cursor-pointer py-1.5 font-medium order-1 lg:order-none flex-1 lg:flex-none"
        >
          <img
            className="w-50%"
            src="https://lumiere-a.akamaihd.net/v1/images/sw_nav_logo_mobile_659fef1a_1_99c6e87c.png?region=0,0,312,32"
            alt="Star Wars"
          />
        </NavLink>
        <div className="order-3 lg:order-none w-full my-4 lg:my-0">
          <Search closeBurger={setOpenNav} />
        </div>
        <div className="flex items-center gap-4 order-2 lg:order-none flex-1 lg:flex-none">
          <div className="mr-4 hidden lg:block">{navList}</div>
          <IconButton
            variant="text"
            color="blue"
            className="ml-auto h-6 w-6 text-white hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={3}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={3}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
      </div>
      <MobileNav open={openNav}>{navList}</MobileNav>
    </Navbar>
  );
};
