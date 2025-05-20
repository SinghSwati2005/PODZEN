import React, { useState } from 'react';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Function to trigger the password reset API call
  const resetPassword = async () => {
    if (!email) {
      setMessage('Please enter your email.');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('https://api.example.com/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      
      if (response.ok) {
        setMessage('If the email exists in our system, you will receive a password reset email.');
      } else {
        setMessage(data.error || 'An error occurred. Please try again.');
      }
    } catch (error) {
      setMessage('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className='h-screen bg-gray-100 flex items-center justify-center'>
      <div className='w-3/6 bg-white p-8 rounded-lg shadow-md'>
        <h2 className='text-2xl font-semibold text-center mb-6'>Forgot Your Password?</h2>

        {/* Email input */}
        <div className='mb-4'>
          <label htmlFor="email" className='block text-lg font-medium'>Enter your email:</label>
          <input
            id="email"
            type="email"
            className='w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Email address'
          />
        </div>

        {/* Submit button */}
        <button
          onClick={resetPassword}
          className='w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50'
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Reset Password'}
        </button>

        {/* Message display */}
        {message && <p className='mt-4 text-center text-gray-600'>{message}</p>}
      </div>
    </div>
  );
};

export default ForgotPassword;
