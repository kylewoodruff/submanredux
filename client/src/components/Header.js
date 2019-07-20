import React, { Component } from "react";
import Img from "../assets/images/wtlogontg.png";
import Wrapper2 from "./Wrapper2.js";
import styled from 'styled-components';

const Heading = styled.nav`
    background-color: rgba(65, 65, 65, 0.80);
    height: 70px;
    position: fixed;
    top: 0px;
    right: 0px;
    left: 0px;
    margin-bottom: 10px;
    z-index:1000;
`;

const Brand = styled.img`
    height: 60px;
    position: fixed;
    right: 15px;
    top: 5px;
    margin-bottom: 5px;
`;

class Header extends Component {
    render() {
        return (
            <Wrapper2>
                <Heading>
                    <Brand src={Img}/>
                </Heading>
            </Wrapper2>
        )
    }
}

export default Header;