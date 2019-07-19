import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Watchlist from "./pages/Watchlist";
import Playlist from "./pages/Playlist";
import Subscriptions from "./pages/Subscriptions";
import Profile from "./pages/Profile";
import NoMatch from "./pages/NoMatch";
import './App.css';
import { createGlobalStyle } from "styled-components";
import Callback from "./Callback";

const GlobalStyle = createGlobalStyle`
  body, html {
    width: 100%;
    height: 100%;
  }
`;

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />    
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
          <Route exact path="/profile" component={Profile} />
          <Route exact path='/callback' component={Callback}/>
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
    </React.Fragment>
  );
}

export default App;
