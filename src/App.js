import React from 'react';

import './style.css';
import { Route, Switch } from 'react-router-dom';

import AllMeetups from './pages/AllMeetups';
import Favorites from './pages/Favorites';
import NewMeetups from './pages/NewMeetups';

export default function App() {
  return (
    <div>
      <Switch>
        <Route path="/">
          <AllMeetups />
        </Route>
        <Route path="/favorites">
          <Favorites />
        </Route>
        <Route path="/new-meet-ups">
          <NewMeetups />
        </Route>
      </Switch>
    </div>
  );
}
