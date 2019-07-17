import React, { Component } from "react";
import Navbar from "../components/Navbar";
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    color: ${props => (props.whiteColor ? 'white' : 'black')};
  }
  `

class Subscriptions extends Component {
    render() {
        return (
            <React.Fragment>
                <GlobalStyle whiteColor />
                <h1>Hello World!!!</h1>
                <Navbar />
            </React.Fragment>
        )
    }
}

export default Subscriptions;