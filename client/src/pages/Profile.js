import React, { Component } from "react";
import Navbar from "../components/Navbar.js";
import Header from "../components/Header.js";
import { createGlobalStyle } from 'styled-components';

const ProfileStyle = createGlobalStyle`
  body {
    color: ${props => (props.whiteColor ? 'white' : 'black')};
    background:  black;
    font-family: 'Roboto', sans-serif;
  }
  `

class Profile extends Component {
    render() {
        return (
            <React.Fragment>
                <ProfileStyle whiteColor />
                <Header />
                <Navbar />
            </React.Fragment>
        )
    }
}

export default Profile;