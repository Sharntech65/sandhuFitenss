// app/auth/layout.tsx
import React from 'react';

export default function AuthLayout({ children }) {
  return (
    <div className="login-container pb60">
      <div className="container">
        <div className="row">
          <div className="col-sm-2 col-lg-3 col-xl-4"></div>

          <div className="col-sm-8 col-lg-6 col-xl-4">
            <main>{children}</main>
          </div>

          <div className="col-sm-2 col-md-3 col-xl-4"></div>
        </div>
      </div>
    </div>
  );
}
