import React, { Component } from "react";
import AddSubBtn from "../components/AddSubBtn.js";
import DatePick from "../components/DatePick.js";
import styled from 'styled-components';

const Form = styled.form`
margin: 5px 15px 10px 25px;
`;

const SideNav = styled.div`
height: 100%; 
width: 0; 
position: fixed; 
z-index: 1; 
top: 1; 
right: 0;
background-color: rgb(30, 30, 30);
overflow-x: hidden; 
padding-top: 100px; 
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

const Submit = styled.button`
    background-color: white;
    color: black;
    border-radius: 5px;
    margin-top: 5px;

    :hover {
        background-color: #0325FB;
        color: white;
        border: none;
    }
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
    }

    render() {
        return (
            <SideNav id="mySidenav">
                <CloseBtn href="#" onClick={this.closeNav}>&times;</CloseBtn>
                <Form>
                    <div className="form-group">
                        <label for="subscriptionName">Subscription Name</label>
                        <input type="name" className="form-control" id="subscriptionName" placeholder="Enter Subscription Name" />
                    </div>
                    <div className="form-group">
                        <label for="monthlyCost">Monthly Cost</label>
                        <input type="monthlyCost" className="form-control" id="subscriptionName" placeholder="Enter Monthly Cost" />
                    </div>
                    <div className="form-group">
                        <label for="dueDate">Next Due Date</label>
                        <DatePick />
                    </div>
                    <Submit type="button" class="btn submit btn-sm">Submit</Submit>

                </Form>

                {/* <!-- Use any element to open the sidenav --> */}
                <AddSubBtn />

                {/* <!-- Add all page content inside this div if you want the side nav to push page content to the right (not used if you only want the sidenav to sit on top of the page --> */}
                <Main>
                    {/* body text here to move it over when nav expanded */}
                </Main>
            </SideNav>
        );
    }
}

export default AddSub;