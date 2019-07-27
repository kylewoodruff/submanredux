import React, { Component } from "react";
import AddSubBtn from "../components/AddSubBtn.js";
import { InputName, InputCost, SelectDate, FormButton } from "../components/SubForm.js";
import styled from 'styled-components';

const Form = styled.form`
margin: 5px 15px 10px 25px;
`;

const SideNav = styled.div`
height: 100%; 
width: 0; 
position: fixed; 
z-index: 1; 
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

const Main = styled.div`
transition: margin-left .5s;
padding: 20px;
`;

class AddSub extends Component {
    state = {
        isHidden: false
    }

    openNav() {
        document.getElementById("mySidenav").style.width = "500px";
        this.setState({
            isHidden: true
        })
    }

    closeNav() {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("addBtn").style.display= "inline-block";
    }

    render() {
        return (
            <SideNav id="mySidenav">
                <CloseBtn href="#" onClick={this.closeNav}>&times;</CloseBtn>
                <Form>
                    <InputName name="name" placeholder="Enter Subscription Name (required)" />
                    <InputCost name="cost" placeholder="Enter Monthly Cost (required)" />
                    <SelectDate name="due-date" />
                    <FormButton onClick={this.saveSub}>Create New Subscription</FormButton>
                </Form>
                <AddSubBtn />
                <Main>
                    {/* body text here to move it over when nav expanded */}
                </Main>
            </SideNav>
        );
    }
}

export default AddSub;