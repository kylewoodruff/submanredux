import React from "react";
import Wrapper2 from "../Wrapper2";
import Img from "./image.png";
import styled from 'styled-components';

const LandingImg = styled.div`
    background-image: url(${Img});
    background-position: center;
    background-attachment: fixed;
    background-repeat: no-repeat;
    height: 100px;
    width: 100%;
    margin: 0px;
    padding: 0px;
    margin-top: 0px;
    }
`;


function BackgroundImg() {
    return (
        <Wrapper2>
            <LandingImg />
        </Wrapper2>
    )
}

export default BackgroundImg;