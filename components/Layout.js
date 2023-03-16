import React from 'react';
import MainNav from './MainNav';

export default function Layout({ children }) {
  return (
    <>
      <MainNav />
      <br/>
      <div>{children}</div>
    </>
  );
}


