import React, { Component } from "react";
import Img from "../assets/images/add.png";
import styled from 'styled-components';

const Fab = styled.span`
position: absolute;
bottom: 0;
display: block;
width: 56px;
height: 56px;
background-color: rgba(65, 65, 65, 0.80);
box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
color: rgba(65, 65, 65);
border-radius: 50%;
margin-bottom: 35px;
margin-left: 580px;

:hover {
    background-color: #0325FB;
}
`;

const AddBtn = styled.div`
position: fixed;
color: black;
background: black;
background-color: rgba(65, 65, 65, 0.80);
left: 50%;
bottom: 15px;
`;

const Plus = styled.i`
display: inline-block;
background: url("${Img}") no-repeat;
background-position: center;
height: 30px;
width: 30px;
background-size: cover;
margin: 13px 13px 13px 13px;
`;

class AddSubBtn extends Component {
    state = {
        isVisible: true
    };

    openNav() {
        document.getElementById("mySidenav").style.width = "500px";
        document.getElementById("addBtn").style.display = "none";
    };

    render() {
        return (
            <div id="addBtn">
                <span onClick={this.openNav} data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <AddBtn>
                        <Fab>
                            <Plus />
                        </Fab>
                    </AddBtn>
                </span>
            </div>
        )
    };
};

export default AddSubBtn;