import React, { Component } from "react";
import SignupForm from "../components/signupForm";
import Img from "../assets/images/Newbackground@4x.png";
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import SignupHeader from "../components/signupHeader";
import SignupSelect from "..//components/signupSelect";

const SignUpStyle = createGlobalStyle`
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



class SignUp extends Component {
    render() {
        return (
            <React.Fragment>
                <SignUpStyle />
                <div className="container">
                    <SignupHeader />
                    <div className="signup-body">
                        <div className="container">
                            <SignupSelect />
                            <strong class="mm-auto">OR</strong>
                            <SignupForm />
                        </div>
                    </div>
                </div>

            </React.Fragment>
        )
    }
}

export default SignUp;
