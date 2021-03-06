import React from "react";
import styled from 'styled-components';
import Api from "../utils/Api";


const Form = styled.form`
    margin-top: 225px;

    @media (max-width: 576px) {
        margin-top: 135px;
    }
`;


class signupForm extends React.Component {

    state = {
        email: '',
        firstName: '',
        lastName: '',
        password: ''

    }
    handleInputChange = event => {
        let value = event.target.value;
        const name = event.target.name;

        if (name === "password") {
            value = value.substring(0, 15);
        }
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();

        this.setState({
            email: "",
            firstName: "",
            lastName: "",
            password: ""
        });
        console.log(this.state)
        Api.saveUser({
            email: this.state.email,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            password: this.state.password

        })
            .then(res => console.log("success!"))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <section className="register">
                <h2>Sign up with your email address</h2>
                <form id="reg-with-email" method="post" action="/" noValidate="true">
                    <div className="form-group">
                        <label for="enterEmail">Email address</label>
                        <input type="email" className="form-control" id="enter-email" aria-describedby="emailHelp" placeholder="Enter email"></input>
                    </div>
                    <div className="form-group">
                        <label for="confirmEmail">Email address</label>
                        <input type="email" className="form-control" id="confirm-email" aria-describedby="emailHelp" placeholder="Confirm email"></input>
                    </div>
                    <div className="form-group">
                        <label for="userPassword">Password</label>
                        <input type="password" className="form-control" id="password" placeholder="Password"></input>
                    </div>
                    <div className="form-group">
                        <label for="userFirstName">First Name</label>
                        <input type="text" className="form-control" id="first-name-field" placeholder="First Name"></input>
                    </div>
                    <div className="form-group">
                        <label for="userLastName">Last Name</label>
                        <input type="text" className="form-control" id="last-name-field" placeholder="Last Name"></input>
                    </div>
                    <div className="form-row">
                        <div className="col-md-4 mb-3">
                            <label for="regDOBMonth">Month</label>
                            <select className="form-control" id="reg-dob-month" data-msg-required="Please enter your birth month.">
                                <option value selected="month">month</option>
                                <option value="01">January</option>
                                <option value="02">February</option>
                                <option value="03">March</option>
                                <option value="04">April</option>
                                <option value="05">May</option>
                                <option value="06">June</option>
                                <option value="07">July</option>
                                <option value="08">August</option>
                                <option value="09">September</option>
                                <option value="10">October</option>
                                <option value="11">November</option>
                                <option value="12">December</option>
                            </select>
                        </div>
                        <div className="col-md-4 mb-3">
                            <label for="regDOBDay">Day</label>
                            <input type="number" className="form-control dob has-error" id="reg-dob-day" placeholder="day" max="31" maxLength="2" min="1" pattern="[0-9]*" data-msg-required="Please enter a valid day of the month." data-msg-number="Please enter a valid day of the month." data-msg-min="Please enter a valid day of the month." data-msg-max="Please enter a valid day of the month." data-msg-maxlength="Please enter a valid day of the month." ></input>
                        </div>
                        <div>
                            <label>Year</label>
                            <input type="number" id="reg-dob-year" min="1900" max="2006" maxlength="4" pattern="[0-9]*" placeholder="year" className=" form-control year has-error" data-msg-required="Please enter a valid year." data-msg-number="Please enter a valid year." data-msg-min="Please enter a valid year." data-msg-max="Sorry, but you don't meet Spotify's age requirements." data-msg-maxlength="Please enter a valid year."></input>
                        </div>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioMale" id="reg-radio-male" value="M"></input>
                        <label class="form-check-label" for="maleGender">Male</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioFemale" id="reg-radio-femail" value="F"></input>
                        <label class="form-check-label" for="femaleGender">Female</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioNonBinary" id="reg-radio-nb" value="U"></input>
                        <label class="form-check-label" for="nonBinaryGender">Non-Binary</label>
                    </div>
                    <button type="button" class="btn btn-dark" onClick={this.handleFormSubmit}>Submit</button>
                </form>
            </section>

        )
    }
}

export default signupForm;