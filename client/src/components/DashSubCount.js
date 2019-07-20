import React from "react";
import styled from 'styled-components';
import DashCard from "./DashCard.js";

const Count = styled.h1`
    font-size: 80px;
    font-weight: bolder;
    color: white;
`;

const CountText = styled.h1`
    font-size: 18px;
    color: white;
    font-weight: bold;
    margin: 8px;
`;

function DashSubCount(props) {
   
        return(
            <DashCard>
                <CountText>Total Montly Subscriptions</CountText>
                <Count>{props.children}</Count>
            </DashCard>
        )
    }

export default DashSubCount;