import React, { Component } from "react";
import styled from 'styled-components';

const DCard = styled.div`
    background-color: rgba(50, 50, 50, 0.50);
    height: auto;
    width: 100%;
    text-align: center;
    margin: 10px 10px 0px 0px;
    padding: 5px;
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