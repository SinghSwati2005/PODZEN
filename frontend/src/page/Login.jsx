// import React from 'react';

// const Login = () => {
//   return (
//     <div>
//       <h2>Login Page</h2>
//       <form>
//         {/* Add form fields here */}
//       </form>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from 'react';
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  return (
    <div className='h-screen bg-green-100 flex items-center justify-center'>
      <div className='w-96 bg-green-900 p-8 rounded-lg shadow-lg'>
        {/* Logo and Title */}
        <div className='flex justify-center mb-8'>
          <Link to="/" className="text-2xl font-semibold text-white">PODZEN</Link>
        </div>

        {/* Login Form */}
        <h2 className="text-2xl text-center text-white mb-6">Login to Your Account</h2>

        <form className="space-y-4">
          {/* Email Field */}
          <div className="relative">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full h-12 px-3 bg-green-800 border border-transparent focus:outline-none focus:ring-2 focus:ring-green-500 text-white placeholder-gray-400 rounded-md"
              placeholder="Email"
              required
            />
          </div>

          {/* Password Field */}
          <div className="relative">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full h-12 px-3 bg-green-800 border border-transparent focus:outline-none focus:ring-2 focus:ring-green-500 text-white placeholder-gray-400 rounded-md"
              placeholder="Password"
              required
            />
          </div>

          {/* Remember Me */}
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="rememberMe"
              checked={formData.rememberMe}
              onChange={handleInputChange}
              className="accent-green-500"
            />
            <span className="text-white text-sm">
              Remember me
            </span>
          </div>

          {/* Forgot Password Link */}
          <div className="text-right">
            <Link to="/forgot-password" className="text-white text-sm hover:underline">
              Forgot Password?
            </Link>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full h-12 bg-green-600 text-white rounded-lg mt-6 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Login
          </button>
        </form>

        {/* Don't have an account */}
        <div className="text-center text-white mt-4">
          <p>
            Don't have an account?{' '}
            <Link to="/signup" className="text-green-400 hover:underline">
              Sign up here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

