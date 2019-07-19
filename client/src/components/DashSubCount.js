import React from "react";
import styled from 'styled-components';
import DashCard from "./DashCard.js";

const Count = styled.h1`
    font-size: 48px;
    font-weight: bold;
    color: white;
    background-color: 
`;

function DashSubCount(props) {
   
        return(
            <DashCard>
                <Count>{props.children}</Count>
            </DashCard>
        )
    }

export default DashSubCount;