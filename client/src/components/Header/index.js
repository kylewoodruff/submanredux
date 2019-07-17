import React, { Component } from "react";
import Img from "../../assets/images/fullLogo.png"
import Wrapper2 from "../Wrapper2";
import styled from 'styled-components';

const Heading = styled.nav`
    background-color: rgba(70, 70, 70, 0.95);
    height: 95px;
    width: 100%;
    margin: 0px 100px 0px 30px;
`;

const Brand = styled.div`
    background: url(${Img});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-origin: padding-box;
    height: 85px;
    width: 275px;
    position: fixed;
    right: 15px;
    top: 5px;
`;

class Header extends Component {
    render() {
        return (
            <Wrapper2>
                <Heading>
                    <Brand />
                </Heading>
            </Wrapper2>
        )
    }
}

export default Header;