import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { Layout } from './Layout';
import { Home } from '../pages/Home';
import { People } from '../pages/People';
import { Planets } from '../pages/Planets';
import { ItemPageDetail } from '../ItemPageDetail';
import { Ships } from '../pages/Ships';
import { Films } from '../pages/Films';
import { Vehicles } from '../pages/Vehicles';
import { Species } from '../pages/Species';

export const routing = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/people', element: <People /> },
      {
        path: '/people/:itemId',
        element: <ItemPageDetail category={'people'} />,
      },
      { path: '/starships', element: <Ships /> },
      {
        path: '/starships/:itemId',
        element: <ItemPageDetail category={'starships'} />,
      },
      { path: '/planets', element: <Planets /> },
      {
        path: '/planets/:itemId',
        element: <ItemPageDetail category={'planets'} />,
      },
      { path: '/films', element: <Films /> },
      {
        path: '/films/:itemId',
        element: <ItemPageDetail category={'films'} />,
      },
      { path: '/vehicles', element: <Vehicles /> },
      {
        path: '/vehicles/:itemId',
        element: <ItemPageDetail category={'vehicles'} />,
      },
      { path: '/species', element: <Species /> },
      {
        path: '/species/:itemId',
        element: <ItemPageDetail category={'species'} />,
      },
    ],
  },
]);
