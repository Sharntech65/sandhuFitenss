// pages/404.js

import Link from 'next/link';
import './layout.scss';

const Custom404 = () => {
  return (
    <div className="container">
      <h1>404 - Page Not Found</h1>
      <p>Oops! The page you are looking for does not exist.</p>
      <Link href="/">Go back home</Link>
    </div>
  );
};

export default Custom404;
