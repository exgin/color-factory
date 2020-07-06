import React from 'react';
import { NavLink } from 'react-router-dom';

const Color = ({ colorName, colorValue }) => {
  return (
    <div className='Color' style={{ backgroundColor: colorValue }}>
      <h2>I am {colorName}</h2>
      <p>My value is {colorValue}</p>
      <NavLink to='/colors'>Go back home</NavLink>
    </div>
  );
};

export default Color;
