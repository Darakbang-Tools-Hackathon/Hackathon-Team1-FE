import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="container mx-auto p-4">
      <main>{children}</main>
    </div>
  );
};

export default Layout;
