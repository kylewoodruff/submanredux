import React, { Component } from "react";
import AddSubBtn from "../components/AddSubBtn.js";
import styled from 'styled-components';
import Wrapper2 from "../components/Wrapper2.js";

const SideNav = styled.div`
height: 100%; 
width: 0; 
position: fixed; 
top: 0; 
right: 0;
background-color: rgb(30, 30, 30);
overflow-x: hidden; 
padding-top: 75px; 
transition: 0.5s;
z-index: 1000;
`;

const CloseBtn = styled.a`
padding: 8px 8px 8px 32px;
text-decoration: none;
font-size: 25px;
color: #818181;
display: block;
transition: 0.3s;
position: absolute;
top: 0;
right: 25px;
font-size: 36px;
margin-left: 50px;

:hover {
    color: white;
    text-decoration: none;
}
`;

class AddSub extends Component {

    closeNav() {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("addBtn").style.display = "inline-block";
    }

    render() {
        return (
            <Wrapper2>
                <SideNav id="mySidenav">
                    <CloseBtn href="#" onClick={this.closeNav}>&times;</CloseBtn>
                    {this.props.children}
                        <AddSubBtn />
                </SideNav>
            </Wrapper2>
        );
    }
}

export default AddSub;