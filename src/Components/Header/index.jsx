import React from 'react';
import { MdAddCircleOutline } from "react-icons/md";
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className='w-11/12 rounded-3xl px-9 flex items-center justify-between border-b pb-5 h-12'>
        <h1 className='text-2xl text-emerald-500'>Quotify</h1>
        <ul className='w-1/4 flex items-center justify-evenly text-lg'>
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