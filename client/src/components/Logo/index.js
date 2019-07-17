import React from "react";
//import "./style.css";
import Wrapper2 from "../Wrapper2";
import Img from "./fullLogo.png";
import styled from 'styled-components';

const LogoImg = styled.div`
    background-image: url(${Img});
    background-position: right;
    background-repeat: no-repeat;
    background-size: 200px;
    height: 80px;
    width: 20%;
    margin: 0px;
    margin-top: -50px;
    margin-left: 975px;
    padding: 0px;
    }
`;



function Logo() {
    return (
        <Wrapper2>
            <LogoImg />
        </Wrapper2>
    )
}

export default Logo;