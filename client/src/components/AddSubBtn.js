import React, { Component } from "react";
import Img from "../assets/images/add.png";
import styled from 'styled-components';

const Fab = styled.span`
position: absolute;
bottom: 0;
display: block;
width: 56px;
height: 56px;
background-color: rgb(30, 30, 30);
border-radius: 50%;
box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
margin-left: 600px;
margin-bottom: 35px;

:hover {
    background-color: #0325FB;
}
`;

const AddBtn = styled.div`
position: fixed;
color: black;
background: black;
left: 50%;
bottom: 15px;
margin-left: -85px;
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
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         isHidden: false,
    //     }
    // }

    openNav() {
        document.getElementById("mySidenav").style.width = "500px";
    }

    render() {
        return (
            <div>
                <span onClick={this.openNav} data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <AddBtn>
                        <Fab>
                            <Plus />
                        </Fab>
                    </AddBtn>
                </span>
            </div>
        )
    }
}

export default AddSubBtn;