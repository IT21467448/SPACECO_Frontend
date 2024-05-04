/*import React, { useState } from 'react';
import { useContext } from "react";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { AuthContext } from "../context/AuthContext";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { user } = useContext(AuthContext);
  console.log(user); 
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='w-full flex justify-between items-center h-24  mx-auto px-4 text-white bg-black'>
      <h1 className='w-full text-3xl font-bold text-[#00df9a]'>SPACECO...</h1>
      <ul className='hidden md:flex'>
        <li className='p-4'><Link to="/home">Home</Link></li>
        <li className='p-4'><Link to="/mars">Mars</Link></li>
        <li className='p-4'><Link to="/resources">Resources</Link></li>
        <li className='p-4'><Link to="/earth">Earth</Link></li>
        <li className='p-4'><Link to="/company">Contact</Link></li>
        <li className='p-4'>
          {user ? (
            <span className="text-[#00df9a] ">{user.username}</span>
          ) : (
            <button className="bg-[#00df9a] text-black rounded-md font-medium w-[80px] ml-12 py-1">Login</button>
          )}
        </li>
        <li className='p-4'>
        <Link to="/" className='bg-green-600 text-w px-4 py-1 transition-all duration-300 rounded hover:bg-slate-500'>Exit</Link>
        </li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>REACT.</h1>
          <li className='p-4 border-b border-gray-600'>Home</li>
          <li className='p-4 border-b border-gray-600'>Company</li>
          <li className='p-4 border-b border-gray-600'>Resources</li>
          <li className='p-4 border-b border-gray-600'>About</li>
          <li className='p-4  border-b border-gray-600' >Contact</li>
          <li className='p-4'> 
          <button className="text-white">Login</button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;*/
import React, { useState, useEffect } from 'react';
import { useContext } from "react";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { AuthContext } from "../context/AuthContext";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { user } = useContext(AuthContext);
  console.log(user); 
  const [nav, setNav] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className={`w-full flex justify-between items-center h-24 mx-auto px-4  text-white ${isScrolled ? 'bg-black fixed top-0 left-0 z-50' : 'bg-black'}`}>
      <h1 className='w-full text-3xl font-bold text-[#00df9a]'>SPACECO.</h1>
      <ul className='hidden md:flex'>
        <li className='p-4 '><Link to="/home">Home</Link></li>
        <li className='p-4'><Link to="/mars">Mars</Link></li>
        <li className='p-4'><Link to="/resources">Resources</Link></li>
        <li className='p-4'><Link to="/earth">Earth</Link></li>
        <li className='p-4'>
          {user ? (
            <span className="text-[#00df9a] ">{user.username}</span>
          ) : (
            <button className="bg-[#00df9a] text-black rounded-md font-medium w-[80px] ml-12 py-1">Login</button>
          )}
        </li>
        <li className='p-4'>
          <Link to="/" className='bg-green-600 text-w px-4 py-1 transition-all duration-300 rounded hover:bg-slate-500'>Exit</Link>
        </li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>SPACECO.</h1>
        
        <li className='p-4 border-b border-gray-600'><Link to="/home">Home</Link></li>
        <li className='p-4 border-b border-gray-600'><Link to="/mars">Mars</Link></li>
        <li className='p-4 border-b border-gray-600'><Link to="/resources">Resources</Link></li>
        <li className='p-4 border-b border-gray-600'><Link to="/earth">Earth</Link></li>
        <li className='p-4 border-b border-gray-600'>
          {user ? (
            <span className="text-[#00df9a] ">{user.username}</span>
          ) : (
            <button className="bg-[#00df9a] text-black rounded-md font-medium w-[80px] ml-12 py-1">Login</button>
          )}
        </li>
        <li className='p-4 '>
          <Link to="/" className='text-blue-600  py-1  hover:bg-slate-500'>Exit</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
