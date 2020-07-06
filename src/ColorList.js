import React from 'react';
import { NavLink } from 'react-router-dom';

const ColorList = ({ colors }) => {
  // loop through the colors state state object
  const allColors = Object.keys(colors).map((name) => (
    // create a link for every color to go to <Color/>
    <li key={name}>
      <NavLink to={`/colors/${name}`}>{name}</NavLink>
    </li>
  ));

  return (
    <div className='ColorList'>
      <h1 className='ColorList-title'>Welcome to the color factory</h1>
      <h3>Please Select a color</h3>
      <div className='ColorList-area'>
        <ul>{allColors}</ul>
      </div>
    </div>
  );
};

export default ColorList;
