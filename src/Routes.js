import React, { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import ColorList from './ColorList';
import NewColorForm from './NewColorForm';
import NavBar from './NavBar';
import Color from './Color';

const Routes = () => {
  // we can define functions in here & pass it down to our componenets
  const INIT_STATE = { red: '#FF0000', green: '#00FF00', blue: '#0000FF' };

  const [colors, setColors] = useState(INIT_STATE);

  //   needs to passed to the newColorForm
  const addColor = (newColor) => {
    setColors((colors) => ({...colors, ...newColor });
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
      <Route path='/colors/:color'>
        <Color />
      </Route>
      <Redirect to='/colors' />
    </Switch>
  );
};

export default Routes;
