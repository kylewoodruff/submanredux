import React, { Component } from "react";
import SignupForm from "../components/Signup-Form";
import "../App.css";

class SignUp extends Component {
    render() {
        return (
           <SignupForm className="signup" />
        )
    }
}

export default SignUp;
