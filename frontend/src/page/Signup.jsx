// import React from 'react';
// import {Link} from "react-router-dom";
// const Signup = () => {
//   return (
//     <div className='h-screen bg-green-100 flex items-center justify-center'>
//         <div className='w-3/6 bg-green-900 flex flex-col items-center justify-center '>
//         <Link to="/" className="text-2xl font-semibold "> PODZEN </Link>
// <div className='mt-6'>
//     <div>
//         <label htmlFor="">Username</label>
//         <input type="text" />
//     </div>
// </div>
//         </div>
 
      
//     </div>

  
// );
// };

// export default Signup;


import React, { useState } from 'react';
import { Link } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    terms: false,
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

        {/* Signup Form */}
        <h2 className="text-2xl text-center text-white mb-6">Create Account</h2>

        <form className="space-y-4">
          {/* Username Field */}
          <div className="relative">
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              className="w-full h-12 px-3 bg-green-800 border border-transparent focus:outline-none focus:ring-2 focus:ring-green-500 text-white placeholder-gray-400 rounded-md"
              placeholder="Username"
              required
            />
          </div>

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

          {/* Terms & Conditions */}
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="terms"
              checked={formData.terms}
              onChange={handleInputChange}
              className="accent-green-500"
              required
            />
            <span className="text-white text-sm">
              I agree to the <span className="underline cursor-pointer">terms and conditions</span>
            </span>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full h-12 bg-green-600 text-white rounded-lg mt-6 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Sign Up
          </button>
        </form>

        {/* Already have an account */}
        <div className="text-center text-white mt-4">
          <p>
            Already have an account?{' '}
            <Link to="/login" className="text-green-400 hover:underline">
              Log in here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
