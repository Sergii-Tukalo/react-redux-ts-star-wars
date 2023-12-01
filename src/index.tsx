import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/input.css';
import { RouterProvider } from 'react-router-dom';
import { routing } from './component/main/routing';
import { Provider } from 'react-redux';
import { store } from './store';
import { Container } from '@mui/material';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Container
        maxWidth="xl"
        className="h-full"
      >
        <RouterProvider router={routing} />
      </Container>
    </Provider>
  </React.StrictMode>
);
