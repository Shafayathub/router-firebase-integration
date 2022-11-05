import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';

const auth = getAuth(app);

const Home = () => {
  const [user] = useAuthState(auth);
  return (
    <div className="bg-slate-500 text-yellow-50 p-2">
      <h1>This is home</h1>
      <div className="flex justify-center items-center space-x-2">
        <h2>
          Current user: {user ? user.displayName : 'No on is signed in yet'}
        </h2>
        <img
          className="rounded-full border-2"
          src={user?.photoURL}
          alt={user?.displayName}
        />
      </div>
    </div>
  );
};

export default Home;
