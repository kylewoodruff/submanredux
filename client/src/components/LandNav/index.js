import React, { Component } from "react";
import styled from 'styled-components';

const Nav = styled.nav`
         background-color: rgba(0, 0, 0, 0.65);
         height: auto;
         margin-left: -15px;
         margin-right: -15px;
        `;

const Logo = styled.a`
        color: rgb(255, 255, 255);
        font-size: 32px;
        font-family: 'Roboto', sans-serif;

        :hover {
            color: rgb(39, 111, 219);
            text-decoration: none;
        }
        `;

const NavText = styled.a`
        color: white;
        margin-right: 25px;
        font-size: 18px;

        :hover {
            color: rgb(39, 111, 219);
            text-decoration: none;
        }
        `;

class LandNav extends Component {
    render() {
        return (
            <Nav className="navbar navbar-expand-lg navbar-light">
                <Logo className="logo" href="/">Submerge</Logo>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavText href="/login">Login</NavText>
                        </li>
                        <li className="nav-item">
                            <NavText href="/signup">Sign Up</NavText>
                        </li>
                    </ul>
                </div>
            </Nav>
        )
    }
}

export default LandNav;