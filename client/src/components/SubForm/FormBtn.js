import React from "react";
import styled from 'styled-components';

const Submit = styled.button`
    background-color: white;
    color: black;
    border-radius: 5px;
    margin-top: 20px;

    :hover {
        background-color: #0325FB;
        color: white;
        border: none;
    }
`;

export function FormBtn(props) {
    return (
      <Submit {...props} type="button" className="btn submit btn-sm">
        {props.children}
      </Submit>
    );
  }