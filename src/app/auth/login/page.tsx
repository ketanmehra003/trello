"use client";

import React, { useState } from 'react';
import Head from 'next/head';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempted with:', email, password);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ background: 'linear-gradient(to bottom, #FFFFFF, #AFA3FF)' }}
    >
      <Head>
        <meta name="description" content="Workflo login page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
  
      <main className="w-full max-w-md p-6">
        <div className="bg-slate-50 rounded-lg shadow-md p-8 flex flex-col items-center">
          <h1 className="text-2xl font-semibold text-center mb-6">
            Welcome to <span className="text-purple-600">Workflo</span>!
          </h1>
          <form onSubmit={handleSubmit} className="w-full">
            <div className="bg-slate-200 border rounded-md px-3">
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full mb-2 mt-2 border rounded-md bg-slate-700"
                required
              />
            </div>
            <div className="relative bg-slate-200 border rounded-md mt-2 px-3">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full mb-2 mt-2 border rounded-md bg-slate-700"
                required
              />
              <span className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer">
                👁️
              </span>
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 mt-4 bg-purple-600 text-white rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition-colors"
            >
              Login
            </button>
          </form>
          <p className="mt-4 text-sm flex items-center justify-center">
            Don't have an account? Create a {' '}
            <a href="/auth/signup" className=" hover:underline ml-1" style={{color:"#0054A1"}}>
              new account
            </a>
          </p>
        </div>
      </main>
    </div>
  );
  
};

export default Login;