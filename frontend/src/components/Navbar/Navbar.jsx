import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { IoReorderThreeOutline } from "react-icons/io5";
import { ImCross } from "react-icons/im";
import{ useSelector } from "react-redux";
const Navbar = () => {
  const isLoggedIn = useSelector((state)=>state.auth.isLoggedIn);
  console.log(isLoggedIn);
  const [MobileNav,SetMobileNav]=useState(false);
  const navLinks = [

    {
      name: "Home",
      path: "/",
    },
    {
      name: "Categories",
      path: "/categories",
    },
    
    {
      name: "AllPodcasts",
      path: "/all-podcasts",
    },
    
  ];
  return (
    <nav className='px-4 md:px-8 lg:px-12 py-2 relative'>
      <div className='flex items-center justify-between '>

        <div className='logo brand-name w-2/6 flex items-center gap-4'>
          <img src="https://cdn.techgyd.com/podcasting.png" alt="podzen"
            className='h-16' />
          <Link to="/" className='text-2xl font-bold'>
            PODZEN
          </Link>
        </div>
        <div className='hidden w-2/6 lg:flex items-center justify-center'>
          {navLinks.map((items, i) => (
            <Link
              key={i}
              to={items.path}
              className='ms-4 hover:font-semibold transition-all duration-300'>
              {items.name}
            </Link>
          ))}
        </div>
        <div className='hidden w-2/6 lg:flex items-center justify-end'>
          {/* <Link to="/login" className='px-6 py-3 border border-black rounded-full'>Login</Link>
          <Link to="/signup" className='ms-4 px-6 py-3 bg-black text-white rounded-full'>Sign Up</Link> */}



          
        </div>
        <div className='w-4/6 flex items-center justify-end lg:hidden z-[50]'>
          <button className={`text-4xl 
            ${MobileNav ? "rotate-360":"rotate-180"} transition-all duration-300`}
             onClick={()=>SetMobileNav(!MobileNav)}>

         { MobileNav?<ImCross />:  <IoReorderThreeOutline />}
          </button>
        </div>
      </div>
      {/* mobile nav */}
      <div className={`fixed top-0 left-0 w-full h-screen bg-blue-100 
        ${MobileNav ? "translate-y-[0%]" : "translate-y-[-100%]"} 
        transition-transform  duration-500 ease-in-out`}>
        
        <div className='h-full flex flex-col items-center justify-center'>  
           {navLinks.map((items, i) => (
          <Link
            key={i}
            to={items.path}
            className='mb-12 text-3xl hover:font-semibold transition-all duration-300'>
            {items.name}
          </Link>
        ))}
          <Link
         
            to="/login"
            className='mb-12 text-3xl hover:font-semibold transition-all duration-300'>
            Login
          </Link>
          <Link to="/signup"
            className='mb-8 text-3xl hover:font-semibold transition-all duration-300'>
            SignUP
          </Link>
        
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;