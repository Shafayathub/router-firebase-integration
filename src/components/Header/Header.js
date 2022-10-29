import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="mt-3 bg-slate-500 text-white space-x-3">
      <Link className="hover:text-blue-200" to="/">
        Home
      </Link>
      <Link className="hover:text-blue-200" to="login">
        login
      </Link>
    </div>
  );
};

export default Header;
