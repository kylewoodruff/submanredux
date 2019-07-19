import React, { Component } from "react";
import Img from "../assets/images/wtlogontg.png";
import Wrapper2 from "./Wrapper2.js";
import styled from 'styled-components';

const Heading = styled.nav`
    background-color: rgba(70, 70, 70, 0.95);
    height: 70px;
    width: 100%;
    margin: 0px 100px 0px 30px;
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