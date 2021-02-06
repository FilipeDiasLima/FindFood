import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignUp from '../pages/SignUp'
import SignIn from '../pages/SignIn'
import Home from '../pages/Home';

const Routes = () => {
  return (
    <>
    <Switch>
      <Route path="/login" exact component={SignIn}/>
      <Route path="/register" exact component={SignUp}/>
      <Route path="/" exact component={Home}/>
    </Switch>
  </>
  )
}

export default Routes