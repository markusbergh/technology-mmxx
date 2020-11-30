import React from 'react';
import { Route, Switch } from 'react-router';
import { NavLink } from 'react-router-dom';

// Entry-point for routes shared between client and server
import routes from './routes/routes';

const App = () => (
  <div>
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
    </nav>

    <main>
      <Switch>
        {routes.map(route => (
          <Route key={route.name} {...route} />
        ))}
      </Switch>
    </main>
  </div>
);

export default App;
