import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import routes from 'config/routes';


const App = () => (
  <Fragment>
    {routes.map(({ path, component, isExact }) => (
      <Route path={path} component={component} exact={isExact} key={path} />
    ))}
  </Fragment>
);

export default App;
