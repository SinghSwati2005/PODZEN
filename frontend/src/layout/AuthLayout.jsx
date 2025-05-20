
import React from 'react';
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <div>


     
      
        <Outlet /> {/* This renders the Signup/Login pages */}
      
    </div>
  );
};

export default AuthLayout;
