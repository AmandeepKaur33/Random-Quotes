import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className='w-full sm:w-11/12 rounded-3xl px-6 sm:px-9 flex items-center gap-8 sm:justify-between border-b pb-5 h-12'>
        <h1 className='text-2xl text-emerald-500'>Quotify</h1>
        <ul className='w-1/2 sm:w-1/4 flex items-center justify-evenly text-lg'>
          <NavLink to="/">
          <li>Home</li>
          </NavLink>
          <NavLink to="/SavedQuotes">
          <li>Your Quotes</li>
          </NavLink>
        </ul>
    </div>
  )
}

export default Header