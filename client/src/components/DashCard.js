import React, { Component } from "react";
import styled from 'styled-components';

const DCard = styled.div`
    display: table;
    background-color: rgba(100, 100, 100, 0.25);
    height: auto;
    width: auto;
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