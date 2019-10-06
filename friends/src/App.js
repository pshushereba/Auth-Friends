import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';

import Login from './components/Login.js';

function App() {
  return (
    <div className="App">
      <Route path="/login" component={Login} />
    </div>
  );
}

export default App;
