import React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from './Footer';
import { Navigation } from './Navigation';

export const Layout = () => {
  return (
    <div className="text-white">
      <header className="">
        <Navigation />
      </header>
      <main className="w-full mb-8 lg:mb-16">
        <Outlet></Outlet>
      </main>
      <Footer />
    </div>
  );
};
