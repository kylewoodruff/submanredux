import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Watchlist from "./pages/Watchlist";
import Playlist from "./pages/Playlist";
import Subscriptions from "./pages/Subscriptions";
import NoMatch from "./pages/NoMatch";
import styled from 'styled-components';

import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/subscriptions" component={Subscriptions} />
          <Route exact path="/watchlist" component={Watchlist} />
          <Route exact path="/playlist" component={Playlist} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
