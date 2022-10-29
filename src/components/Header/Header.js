import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="p-3 bg-blue-500 text-white space-x-3">
      <Link className="hover:text-blue-200" to="/">
        Home
      </Link>
      <Link className="hover:text-blue-200" to="/login">
        login
      </Link>
      <Link className="hover:text-blue-200" to="/register">
        Register
      </Link>
    </div>
  );
};

export default Header;
