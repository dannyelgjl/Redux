import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Cart from './pages/Cart';
import Add from './pages/Add';
import List from './pages/List';


const Routes = () => (
  <Switch>
    <Route path="/list" component={List}/>
    <Route path="/add" component={Add}/>
    <Route path="/cart" component={Cart}/>
    <Redirect path="/" to="/list"/>
  </Switch>
);

export default Routes;