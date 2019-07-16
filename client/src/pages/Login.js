import React, { Component } from "react";

class Login extends Component {
    render() {
        return (
            <div>
                <h1>Please Login</h1>
                <button onClick ={this.props.auth.login} >Login</button>
            </div>
        )
    }
}

export default Login;