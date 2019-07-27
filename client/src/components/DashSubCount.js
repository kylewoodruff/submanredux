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
    margin: 15px 1px 5px 1px;
`;

function DashSubCount(props) {
   
        return(
            <DashCard>
                <CountText>Total Monthly Subscriptions</CountText>
                <Count>{"##" || props.subscriptionCount}</Count>
            </DashCard>
        )
    }

export default DashSubCount;