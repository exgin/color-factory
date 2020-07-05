import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className='NavBar'>
      <NavLink exact to='/colors/new'>
        Add a new color
      </NavLink>
    </nav>
  );
};

export default NavBar;
