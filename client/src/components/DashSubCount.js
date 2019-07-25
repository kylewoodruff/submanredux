import React from "react";
import styled from 'styled-components';
import DashCard from "./DashCard.js";

const Count = styled.h1`
    font-size: 85px;
    font-weight: bolder;
    color: white;
    margin-top: 75px;
`;

const CountText = styled.h6`
    color: white;
    font-weight: bold;
    margin: 15px 2px 5px 2px;
`;

function DashSubCount(props) {
   
        return(
            <DashCard>
                <CountText>Total Montly Subscriptions</CountText>
                <Count>{"##" || props.subscriptionCount}</Count>
            </DashCard>
        )
    }

export default DashSubCount;