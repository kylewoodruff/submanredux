import React, { Component } from "react";
import styled from 'styled-components';

const DCard = styled.div`
    display: table;
    background-color: rgba(100, 100, 100);
    height: auto;
    width: 85%;
    text-align: center;
    padding-top: 20%;
    padding-bottom: 20%;
    margin-bottom: 10px;
    margin-top: 10px;
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