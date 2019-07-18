import React, { Component } from "react";
import Img from "../assets/images/Newbackground@4x.png";
import { createGlobalStyle } from 'styled-components';

const LoginStyle = createGlobalStyle`
  body {
    color: ${props => (props.whiteColor ? 'white' : 'black')};
    background: url(${Img});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    font-family: 'Roboto', sans-serif;
    height: 100%;
  }
  `;

class Login extends Component {
    render() {
        return (
            <React.Fragment>
                <LoginStyle />
                
            </React.Fragment>
        )
    }
}

export default Login;