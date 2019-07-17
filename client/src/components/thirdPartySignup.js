import React from "react";
import styled from 'styled-components';


const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
`;

function thirdPartySignup() {
    return (
        <ButtonContainer>
            <form name="signup-facebook_form" method="post" action="/" id="reg-with-fb" noValidate="true">
                <div className="content">
                    <a href="/" className="btn btn-primary btn-lg" id='btn-signup-fb'>Sign up with Facebook</a>
                </div>
            </form>
            <form name="signup-google_form" method="post" action="/" id="reg-with-google" noValidate="true">
                <div className="content">
                    <a href="/" className="btn btn-danger btn-lg" id='btn-signup-google'>Sign up with Google</a>
                </div>
            </form>
        </ButtonContainer>
    )
}

export default thirdPartySignup;
