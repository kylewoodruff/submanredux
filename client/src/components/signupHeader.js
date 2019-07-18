import React from "react";
import styled from 'styled-components';
import logo from "../assets/images/Full_logo.png";

const RegistrationHeader = styled.div`
    padding: .5em 0;

    @media screen and (min-width: 768px) {
        padding: 1.5em 0;
    }
        .logo {
        width: 126px;
        height: 38px;
        }
    @media screen and (min-width: 768px) {
        .logo {
        width: 197px;
        height: 59px;
        }
    }
`;

const Logo = styled.img`
    height: 60px;
    display: block;
    margin: 0 auto;

`;

const BoxContent = styled.div`
    margin: 0 auto;
    max-width: 26.875em;
`;

function SignupHeader() {
    return (
        <RegistrationHeader>
            <div className="container">
                <BoxContent>
                    <Logo src={logo}/>
                </BoxContent>
            </div>
        </RegistrationHeader>

    )
}
export default SignupHeader;