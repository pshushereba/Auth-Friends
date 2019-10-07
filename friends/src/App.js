import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';

import Login from './components/Login.js';
import PrivateRoute from './components/PrivateRoute.js';
import FriendsList from './components/FriendsList';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/login" component={Login} />
        <PrivateRoute exact path="/friends" component={FriendsList} />
        <Route component={Login} />
      </Switch>
    </div>
  );
}

export default App;
