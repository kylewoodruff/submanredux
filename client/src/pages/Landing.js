import React, { Component } from "react";
import Jumbotron from "../components/JumboLand.js";
import LandNav from "../components/LandNav.js";
import Wrapper from "../components/Wrapper.js";
import Img from "../assets/images/image.png";
import { createGlobalStyle } from 'styled-components';

const LandingStyle = createGlobalStyle`
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
  `

class Landing extends Component {
    render() {
        return (
            <React.Fragment>
                <LandingStyle />
                <div className="container-fluid landing">
                    <LandNav />
                    <div className="row">
                        <div className="col-sm-0 col-lg-1 col-xl-1">
                            <p></p>
                        </div>
                        <div className="col-sm-12 col-lg-10 col-xl-10">
                            <Wrapper>
                                <Jumbotron />
                            </Wrapper>
                        </div>
                        <div className="col-sm-0 col-lg-1 col-xl-1">
                            <p></p>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Landing;

