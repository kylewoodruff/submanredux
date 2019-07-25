import React from "react";
import styled from 'styled-components';

const Searchinput = styled.input`
    color: white;
    border: 0;
    outline: 0;
    background: none;
    width: 0;
    caret-color: transparent;
    line-height: 40px;
    transition: width 0.4s linear;
`;

const Searchicon = styled.a`
    height: 40px;
    width: 40px;
    float: right;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    color: white;
`;

const Searchbar = styled.div`
    margin-bottom: auto;
    margin-top: auto;
    height: 60px;
    background-color: rgba(65, 65, 65, 0.80);
    border-radius: 30px;
    padding: 10px;
    
    :hover > ${Searchinput} {
        padding: 0 10px;
        width: 450px;
        caret-color: white;
        transition: width 0.4s linear;
    }

    :hover > ${Searchicon} {
        background: white;
        color: blue;
    }

`;



function SearchBar() {
    return (
        <div className="row">
            <div className="container h-100">
                <div className="d-flex justify-content-left h-100">
                    <Searchbar>
                        <Searchinput type="text" name="search" placeholder="Search..."></Searchinput>
                        <Searchicon href="#" className="search_icon"><i className="fa fa-search"></i></Searchicon>
                    </Searchbar>
                </div>
            </div>
        </div>

    )
}
export default SearchBar;