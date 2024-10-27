'use client';

import axios, { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import { FormEvent, useEffect, useState } from 'react';
import toast from 'react-hot-toast';

export const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const response = await axios.post('http://127.0.0.1:5000/api/register', {
        username,
        password,
      });

      if (response.status === 201) {
        setSuccess('User registered successfully! Redirecting to login...');
        toast.success('Register success');
        setTimeout(() => {
          router.push('/login');
        }, 1000);
      }
    } catch (err) {
      console.error('Register error:', err);
      if (axios.isAxiosError(err)) {
        setError(err.response?.data.error || 'An unexpected error occurred');
      } else {
        toast.error('Again!');
        setError('An unexpected error occurred');
      }
    }
  };

  return (
    <div
      className="flex items-center justify-center h-screen"
      style={{
        background: `url('https://res.cloudinary.com/dmpq7pjrg/image/upload/v1730027809/brg_book2_xal6wk.jpg') no-repeat center center fixed`,
        backgroundSize: 'cover',
      }}
    >
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md space-y-4 max-w-md w-full  animate-upToDown-slow"
      >
        <h2 className="text-2xl font-bold mb-4 text-center text-orange-500">
          Register
        </h2>
        {error && <p className="text-red-500">{error}</p>}
        {success && <p className="text-green-500">{success}</p>}

        <div>
          <label htmlFor="username" className="block mb-1">
            Username:
          </label>
          <div className="relative">
            <i className="fas fa-user absolute left-3 top-2.5 text-gray-400"></i>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full px-10 py-2 border rounded"
            />
          </div>
        </div>

        <div>
          <label htmlFor="password" className="block mb-1">
            Password:
          </label>
          <div className="relative">
            <i className="fas fa-lock absolute left-3 top-2.5 text-gray-400"></i>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-10 py-2 border rounded"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="bg-orange-400 text-white py-2 rounded hover:bg-orange-300 w-full"
          >
            Register
          </button>
        </div>

        <div className="flex">
          <p className="mb-2 text-center">Do you already have an account?</p>
          <a href="/login" className="ml-1 text-blue-600 hover:text-blue-400">
            Login
          </a>
        </div>
      </form>
    </div>
  );
};
