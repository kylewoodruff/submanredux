import React, { Component } from "react";
import styled from 'styled-components';

const DCard = styled.div`
    display: table;
    background-color: rgba(50, 50, 50, 0.50);
    height: auto;
    width: 100%;
    text-align: center;
    padding-top: 20%;
    padding-bottom: 20%;
    margin-bottom: 10px;
    margin-top: 10px;
    border-radius: 15px;
`;

class DashCard extends Component {
    render() {
        return(
            <DCard>
               {this.props.children} 
            </DCard>
        )
    }
}

export default DashCard;