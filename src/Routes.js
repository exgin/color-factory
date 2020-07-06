import React, { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import ColorList from './ColorList';
import NewColorForm from './NewColorForm';
import NavBar from './NavBar';
import Color from './Color';

// TODO
// 1. the color's name isnt being displayed after submitting NewColorForm
// NOTES-- it may have to do with the ColorList -> look at object keys to see what the key is | AKA the 'colorName', similar
// ... to the INIT_STATE in the Routes componenet

// COULD have something to do with the formData, maybe there's two thing to pull out

const Routes = () => {
  // we can define functions in here & pass it down to our componenets
  const INIT_STATE = { red: '#FF0000', green: '#00FF00', blue: '#0000FF' };

  const [colors, setColors] = useState(INIT_STATE);

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
