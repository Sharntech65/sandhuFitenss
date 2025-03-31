'use client';

import React from 'react';

const LoginContainer = ({ children }) => {
  return (
    <div className="d-flex flex-column gap-3 justify-content-center">
      {children}
    </div>
  );
};

const Header = ({ children }) => {
  return <header className="text-center">{children}</header>;
};

LoginContainer.Header = Header;

export default LoginContainer;
