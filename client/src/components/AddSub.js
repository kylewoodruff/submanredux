import React, { Component } from "react";
import DatePicker from "react-datepicker";
import Add from "../assets/images/add.png";
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
}
`;

const AddBtn = styled.span`
position: absolute;
bottom: 0;
display: block;
width: 56px;
height: 56px;
background-color:rgb(30, 30, 30);
border-radius: 50%;
box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);

:hover {
    background-color: black;
}
`;

const Fab = styled.div`
position: fixed;
color: black;
background: black;
left: 50%;
bottom: 15px;
margin-left: -85px;
z-index: 999;
`;

const Plus = styled.i`
display: inline-block;
background: url{"${Add}"};
background-repeat: no-repeat;
background-position: center;
height: 30px;
width: 30px;
background-size: cover;
margin: 13px 13px 13px 13px;
`;

const Main = styled.div`
transition: margin-left .5s;
padding: 20px;
`;

class AddSub extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: new Date()
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(date) {
        this.setState({
            startDate: date
        });
    }

    openNav() {
        document.getElementById("mySidenav").style.width = "600px";
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
                        <DatePicker 
                        dateFormat="yyyy/MM/dd"
                        selected={this.state.startDate} 
                        onChange={this.handleChange} 
                        />
                    </div>
                    
                </Form>

                {/* <!-- Use any element to open the sidenav --> */}
                <AddBtn onClick={this.openNav} className="fab-action-button" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <Fab>
                        <span>
                            <Plus />
                        </span>
                    </Fab>
                </AddBtn>

                {/* <!-- Add all page content inside this div if you want the side nav to push page content to the right (not used if you only want the sidenav to sit on top of the page --> */}
                <Main>
                    {/* body text here to move it over when nav expanded */}
                </Main>
            </SideNav>
        );
    }
}

export default AddSub;