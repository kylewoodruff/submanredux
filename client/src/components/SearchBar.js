import React from "react";
import styled from 'styled-components';

const searchbar = styled.div`
    margin-bottom: auto;
    margin-top: auto;
    height: 60px;
    background-color: #353b48;
    border-radius: 30px;
    padding: 10px;
    
    :hover > .search_input
    padding: 0 10px;
    width: 450px;
    caret - color: red;
    transition: width 0.4s linear;

`;
    


    .search_input{
    color: white;
    border: 0;
    outline: 0;
    background: none;
    width: 0;
    caret - color: transparent;
    line - height: 40px;
    transition: width 0.4s linear;
}

    

    .searchbar: hover > .search_icon{
    background: white;
    color: #e74c3c;
}

    .search_icon{
    height: 40px;
    width: 40px;
    float: right;
    display: flex;
    justify - content: center;
    align - items: center;
    border - radius: 50 %;
    color: white;
}


function SearchBar() {
    return (
        <div className="row">
            <div className="container h-100">
                <div className="d-flex justify-content-center h-100">
                    <div className="searchbar">
                        <input className="search_input" type="text" name="" placeholder="Search..."></input>
                        <a href="#" className="search_icon"><i className="fa fa-search"></i></a>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default SearchBar;