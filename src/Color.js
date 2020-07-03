import React from 'react';
import { useParams, NavLink } from 'react-router-dom';

const Color = ({ colorName, colorValue }) => {
  const { color } = useParams();

  return (
    <div className='Color' style={{ backgroundColor: colorValue }}>
      <h2>I am {color}</h2>
      <NavLink to='/colors'>Go back home</NavLink>
    </div>
  );
};

export default Color;
