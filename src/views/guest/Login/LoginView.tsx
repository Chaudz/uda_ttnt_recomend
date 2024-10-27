'use client';

import { LoginForm } from './components/LoginForm';

export const LoginView = () => {
  return (
    <div>
      <LoginForm />
      <button
        onClick={() => {
          console.log('======');
        }}
      >
        fsafs
      </button>
    </div>
  );
};
