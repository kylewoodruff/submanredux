import React from "react";
import DatePick from "../components/DatePick.js";
import styled from 'styled-components';

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

let saveSub = () => {
    document.getElementById("mySidenav").style.width = "0";
}

export function InputName(props) {
    return (
        <div className="form-group">
            <label for="subscriptionName">Subscription Name</label>
            <input type="name" className="form-control" id="subscriptionName" {...props} />
        </div>
    );
}

export function InputCost(props) {
    return (
        <div className="form-group">
            <label for="monthlyCost">Monthly Cost</label>
            <input type="monthlyCost" className="form-control" id="monthlyCost" {...props} />
        </div>
    );
}

export function SelectDate(props) {
    return (
        <div className="form-group">
            <label for="dueDate">Next Due Date</label>
            <DatePick {...props} />
        </div>
    );
}

export function FormButton(props) {
    return (
        <Submit {...props} onClick={saveSub} type="button" class="btn submit btn-sm">
            {props.children}
        </Submit>
    );
}
