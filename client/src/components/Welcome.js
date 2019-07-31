import React, { Component } from "react";
import styled from 'styled-components';
import auth0Client from '../Auth.js';

const Welcome = styled.h5`
    font-weight: bold;
    color: white;
`;

class WelcomeStatement extends Component {
    render() {
        return(
            <Welcome className="text-center">Welcome to your Dashboard {auth0Client.getProfile().name ||"Username" } !</Welcome>
        )
    }
}

export default WelcomeStatement;