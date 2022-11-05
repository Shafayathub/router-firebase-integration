import { getAuth, signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import app from '../../firebase.init';

const auth = getAuth(app);

const Header = () => {
  const [user] = useAuthState(auth);
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
            alt=""
          />
        )}
      </span>
      {user?.uid ? (
        <Link
          onClick={() => signOut(auth)}
          className="hover:text-blue-200 border rounded-lg text-base p-1"
          to="/"
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
