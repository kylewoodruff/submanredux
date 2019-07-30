import React from 'react';
import { BrowserRouter as Router, Route, Switch, withRouter } from "react-router-dom";
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
import auth0Client from './Auth';
import SecuredRoute from './SecuredRoutes/SecuredRoute';




const GlobalStyle = createGlobalStyle`
  body, html {
    width: 100%;
    height: 100%;
  }
  body {
    @import url("");
    font-family: ;
  }
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkingSession: true,
    }
  }

  async componentDidMount() {
    
    if (this.props.location.pathname === '/callback') {
      this.setState({checkingSession:false});
      return;
    }
    try {
      await auth0Client.silentAuth();
      this.forceUpdate();
    } catch (err) {
      if (err.error !== 'login_required') console.log(err.error);
    }
    this.setState({checkingSession:false});
  }

    render() {
      return (
    

      <React.Fragment>
        <GlobalStyle />    
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/login" component={Login} />
            <SecuredRoute exact path="/dashboard" component={Dashboard}checkingSession={this.state.checkingSession} />
            <SecuredRoute exact path="/subscriptions" component={Subscriptions} checkingSession={this.state.checkingSession} />
            <SecuredRoute exact path="/watchlist" component={Watchlist}  checkingSession={this.state.checkingSession}/>
            <SecuredRoute exact path="/playlist" component={Playlist}  checkingSession={this.state.checkingSession}/>
            <SecuredRoute path='/profile' component={Profile} checkingSession={this.state.checkingSession} />
            <Route exact path='/callback' component={Callback}/>
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
      </React.Fragment>
    );
      }
  }
  





export default withRouter(App);
