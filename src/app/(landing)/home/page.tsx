'use client';
import toast from 'react-hot-toast';
import { useSession, signOut } from 'next-auth/react';

const Home = () => {
  return (
    <div>
      
      <button
        type="button"
        onClick={() => {
          signOut();
        }}
      >
        fdsafs
      </button>


    </div>
  );
};

export default Home;