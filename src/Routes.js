import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import ColorList from './ColorList';
import NewColorForm from './NewColorForm';
import NavBar from './NavBar';
import Color from './Color';

const Routes = () => {
  // we can define functions in here & pass it down to our componenets
  // localStorage -> look for key of colors, if none, use our default
  const INIT_STATE = JSON.parse(localStorage.getItem('colors')) || { red: '#FF0000', green: '#00FF00', blue: '#0000FF' };

  const [colors, setColors] = useState(INIT_STATE);

  useEffect(() => {
    localStorage.setItem('colors', JSON.stringify(colors));
  }, [colors]); // re-render when the state var colors is updated

  //   needs to passed to the newColorForm
  const addColor = (newColor) => {
    setColors((clr) => ({ ...clr, ...newColor }));
  };

  const renderingColor = (props) => {
    const { color } = props.match.params; // can use this instead of useParams()
    const colorValue = colors[color]; // get the color's value
    console.log(colors);

    return <Color colorValue={colorValue} colorName={color} />;
  };

  return (
    <Switch>
      <Route exact path='/colors'>
        <ColorList colors={colors} />
        <NavBar />
      </Route>
      <Route exact path='/colors/new'>
        <NewColorForm addColor={addColor} />
      </Route>
      <Route path='/colors/:color' render={renderingColor} />
      <Redirect to='/colors' />
    </Switch>
  );
};

export default Routes;
