import React from 'react';
import Header from '../components/Header';

const Layout = ({ children }) => {
  return (
    <div>
      <Header /> 
      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        {children}
      </main> 
    </div>
  );
};

export default Layout;
