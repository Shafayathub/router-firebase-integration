import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';

const Header = () => {
  const { user, handleSignOut } = useFirebase();
  return (
    <div className="p-3 bg-blue-500 text-white space-x-3 text-xl font-normal">
      <Link className="hover:text-blue-200" to="/">
        Home
      </Link>
      <Link className="hover:text-blue-200" to="/register">
        Register
      </Link>
      <span className="flex justify-center items-center">
        {user?.displayName && user.displayName}{' '}
        {user?.photoURL && (
          <img
            className="ml-2 h-12 w-12 rounded-full"
            src={user.photoURL}
            alt={user.displayName}
          />
        )}
      </span>
      {user?.uid ? (
        <Link
          onClick={handleSignOut}
          className="hover:text-blue-200 border rounded-lg text-base p-1"
          to="/login"
        >
          Sign Out
        </Link>
      ) : (
        <Link className="hover:text-blue-200" to="/login">
          login
        </Link>
      )}
    </div>
  );
};

export default Header;
