import React from "react";
import styled from 'styled-components';

const Jumbo = styled.div`
    margin-top: 180px;
    background-color: rgba(0, 0, 0, 0.0);
    padding: 35px;
    border-radius: 15px;
    font-family: 'Roboto', sans-serif;

    @media (min-width: 310px) {
        margin-top: 150px;
    }
    @media (max-width: 576px) {
        margin-top: 150px;
    }

    @media (max-width: 767px) {
        margin-top: 150px;
    }

    @media (max-width: 992px) {
        margin-top: 150px;
    }
`;

const Slogan = styled.h1`
    color: white;
    font-size: 48px;
    font-family: 'Roboto', sans-serif;
    font-weight: bolder;
`;

const SubSlogan = styled.p`
    color: white; 
    font-size: 18px;
    margin-top: 20px;
`;

const User = styled.p`
    font-size: 16px;
    color: white;
    margin-top: 25px;
`;

const JumboSign = styled.a`
    color: white;
    font-size: 16px;
    margin-top: -25px;

    :hover {
        color: rgb(39, 111, 219);
        text-decoration: none;
    }
`;

const SignUp = styled.a`
    margin: 10px;
    margin-top: 30px;
    font-size: 28px;
    font-weight: bold;
    letter-spacing: 1px;
    background-color: rgba(37, 101, 221);
    color: white;
    padding: 15px 35px 15px 35px;
    border-radius: 10px;

    :hover {
        color: rgb(0, 174, 255);
        text-decoration: none;
    }
`;

function Jumbotron() {
    return (
        <Jumbo>
            <Slogan className="text-center">Diving deep to keep your subsciptions neat</Slogan>
            <SubSlogan className="text-center">All of your subscriptions in one place</SubSlogan>
            <div className="text-center">
                <SignUp className="btn-lg" href="/signup" role="button">Sign Up Now!</SignUp>
                    <User className="text-center user">Already a user?</User>
                    <JumboSign className="btn btn-sm jumboSign" href="/login"
                        role="button">Login</JumboSign>
            </div>
        </Jumbo>
    )
}

export default Jumbotron;
