import React, { Component } from "react";
import Navbar from "../components/Navbar.js";
import Header from "../components/Header.js";
import { createGlobalStyle } from 'styled-components';

const SubscriptionStyle = createGlobalStyle`
  body {
    color: ${props => (props.whiteColor ? 'white' : 'black')};
    background:  black;
  }
  `

class Subscriptions extends Component {
  render() {
    return (
      <React.Fragment>
        <SubscriptionStyle whiteColor />
        <Header />
        <Navbar />
      </React.Fragment>
    )
  }
}

export default Subscriptions;