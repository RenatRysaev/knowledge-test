import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import routes from 'config/routes';
import PrivateRoute from 'containers/PrivateRoute';
import HeaderContainer from 'containers/HeaderContainer';


const App = () => (
  <Fragment>
    <HeaderContainer />

    <Switch>
      {routes.map(({ path, component, isPrivate, isExact }) => (
        isPrivate
          ? <PrivateRoute path={path} component={component} exact={isExact} key={path} />
          : <Route path={path} component={component} exact={isExact} key={path} />
      ))}
    </Switch>
  </Fragment>
);

export default App;
