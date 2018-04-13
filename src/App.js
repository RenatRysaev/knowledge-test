import React from 'react';
import Switch from 'react-router-dom/es/Switch';
import Route from 'react-router-dom/es/Route';

import Header from './containers/Header';
import Home from './containers/Home';
import Login from './containers/Login';
import News from './containers/News';
import Profile from './containers/Profile';

const App = () => (
  <Switch>
    <Route component={Header} />
    <Route exact path="/" component={Home} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/news" component={News} />
    <Route exact path="/profile" component={Profile} />
  </Switch>
);

export default App;
