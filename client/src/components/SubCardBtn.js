import React, { Component } from "react";
import styled from 'styled-components';

const ActionButton = styled.a`
    margin-left: 15px;
    color: white;
    font-size: 1.5em;

    :hover {
        color: #0325FB;
    }
`;

class SubCardBtn extends Component {
    openNav() {
        document.getElementById("mySidenav").style.width = "500px";
        // this.setState({
        //     hideAddBtn: true
        // })
    }

    render() {
        return (
            <div className="ml-auto">
                <ActionButton href="#" onClick={this.openNav}>
                    <i className="fa fa-edit"></i>
                </ActionButton>
                <ActionButton href="#">
                    <i className="fa fa-trash"></i>
                </ActionButton>
            </div>
        )
    }
}

export default SubCardBtn;