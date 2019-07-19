import React, { Component } from "react";
import styled from 'styled-components';
import auth0Client from '../../Auth';

const FaNav = styled.i`
    position: relative;
    display: table-cell;
    width: 80px;
    height: 40px;
    text-align: center;
    vertical-align: middle;
    font-size:20px;
    color:rgb(202, 202, 202);

    :hover {
        color: white;
    }
`;

const FaProfile = styled.i`
    margin: 5px 10px 5px -10px;
    width: 20px;
    font-size:20px;
    text-align: center;
`;

const Area = styled.div`
    float: left;
    background: rgb(70, 70, 70);
    width: 100%;
    height: 100%;
`;

const MainMenu = styled.nav`
    background:rgb(35, 35, 35);
    position:absolute;
    top:0;
    bottom:0;
    height:100%;
    left:0;
    width:60px;
    overflow:hidden;
    color:rgb(202, 202, 202);
    -webkit-transition:width .12s linear;
    transition:width .12s linear;
    -webkit-transform:translateZ(0) scale(1,1);
    z-index:1000;
    -webkit-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    -o-user-select:none;
    user-select:none;

    &:hover,expanded {
        width: 210px;
        overflow: none;
    }

    &>ul {
        margin: 7px;
        margin-left: -40px;
        position: absolute;
        left: 0;
    }

    & li {
        position:relative;
        display:block;
        width:210px;
        margin-left: 0px;
        color:rgb(202, 202, 202);
        outline:0;
        margin:0;
        padding:0;
        height: 40px;

        :hover {
            color: white;
            background-color: #0325FB;
        }
    }

    & li>a {
        position:relative;
        display:table;
        border-collapse:collapse;
        border-spacing:0;
        color:rgb(202, 202, 202);
        font-family: arial;
        font-size: 14px;
        text-decoration:none;
        -webkit-transform:translateZ(0) scale(1,1);
        -webkit-transition:all .15s linear;
        transition:all .15s linear;
    }

    & nav-icon {
        position:relative;
        display:table-cell;
        width:60px;
        height:36px;
        text-align:center;
        vertical-align:middle;
        font-size:18px;
        }

    & fa-2x {
        font-size: 2em;
    }
        `;

const NavText = styled.span`
    position:relative;
    display:table-cell;
    vertical-align:middle;
    width:185px;
    color:rgb(202, 202, 202);
    font-family: 'Titillium Web', sans-serif;

    :hover {
        color: white;
    }
`;

const NavText2 = styled.span`
    position:relative;
    display:table-cell;
    vertical-align:middle;
    width:185px;
    color:rgb(202, 202, 202);
    font-family: 'Titillium Web', sans-serif;
    margin-left: -5px;

    :hover {
        color: white;
    }
`;

const DropdownMenu = styled.div`
    background-color: rgb(49, 49, 49);
    margin-left: 55px;
`;

const DropdownItem = styled.a`
    color: rgb(202, 202, 202);
    vertical-align:middle;
    width:190px;
    font-family: 'Titillium Web', sans-serif;

    :hover {
        background-color: #0325FB;
        color: white;
    }
`;

class Navbar extends Component {
    render(props) {
        const signOut = () => {
            auth0Client.signOut();
            props.history.replace('/');
          };
        return (
            <Area>
                <MainMenu>
                    <ul>
                        <li className="nav-item dropdown">
                            <a href="/profile" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <FaNav className="fa fa-user"></FaNav>
                                <NavText2 className="username">
                                {auth0Client.getProfile().name}
                                </NavText2>
                            </a>
                            <DropdownMenu className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <DropdownItem className="dropdown-item" href="/profile"> <FaProfile className="fa fa-user fa-profile"></FaProfile> Profile</DropdownItem>
                                <DropdownItem onClick={() => {signOut()}} className="dropdown-item"> <FaProfile className="fa fa-sign-out fa-profile"></FaProfile> Logout</DropdownItem>
                            </DropdownMenu>
                        </li>
                        <li>
                            <a href="/dashboard">
                                <FaNav className="fa fa-home fa-2x"></FaNav>
                                <NavText className="nav-text">
                                    Dashboard
                         </NavText>
                            </a>
                        </li>
                        <li className="has-subnav">
                            <a href="/subscriptions">
                                <FaNav className="fa fa-list fa-nav fa-2x"></FaNav>
                                <NavText className="nav-text">
                                    Subscriptions
                         </NavText>
                            </a>
                        </li>
                        <li>
                            <a href="/watchlist">
                                <FaNav className="fa fa-tv fa-nav fa-2x"></FaNav>
                                <NavText className="nav-text">
                                    Watch List
                         </NavText>
                            </a>
                        </li>
                    </ul>
                </MainMenu>
            </Area>
        )
    }
}

export default Navbar;