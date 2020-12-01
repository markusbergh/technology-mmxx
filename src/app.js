import React from 'react';
import { Route, Switch } from 'react-router';
import { NavLink } from 'react-router-dom';

// Entry-point for routes shared between client and server
import routes from './routes/routes';

import styles from './app.css';

const App = () => (
  <div>
    <nav className={styles.navigation}>
      <ul className={styles.navigation__list}>
        <li className={styles.navigation__list_item}>
          <NavLink to="/">Home</NavLink>
        </li>
        <li className={styles.navigation__list_item}>
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
    </nav>

    <main className={styles.main}>
      <Switch>
        {routes.map(route => (
          <Route key={route.name} {...route} />
        ))}
      </Switch>
    </main>
  </div>
);

export default App;
