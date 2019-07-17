import React, { Component } from "react";
import Logo from "../Logo";
import styled from 'styled-components';

const Heading = styled.div`
         background-color: rgba(70, 70, 70, 0.95);
         height: 80px;
         width: 100%;
         margin: 0px 150px 10px 15px;
        `;

const Logos = styled.a`
        color: rgb(255, 255, 255);
        font-size: 32px;
        font-family: 'Roboto', sans-serif;
        margin-left: 100px;
        height: 100px;
        width: 600px;

        :hover {
            color: rgb(39, 111, 219);
        }
        `;



class Header extends Component {
    render() {
        return (
            <Heading>
                <Logos href="/dashboard">
                    <Logo />
                </Logos>

            </Heading>
        )
    }
}

export default Header;