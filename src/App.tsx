import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GasWarning from './components/GasWarning/GasWarning';
import TopBar from './components/TopBar/TopBar';
import Dashboard from './pages/Dashboard/Dashboard';
import Vote from './pages/Vote/Vote';
import styled from 'styled-components'

const App = () => {
  return (
    <div>
      <GasWarning />
      <Router>
      <TopBar/>
      <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route exact path="/vote">
            <Vote />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;