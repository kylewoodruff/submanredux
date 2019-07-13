import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron-Landing";
import LandNav from "../components/LandNav";
import Wrapper from "../components/Wrapper";
import "../assets/landing.css"


class Landing extends Component {
    render() {
        return (
            <div className="container-fluid">
                <LandNav />
                <div className="row">
                    <div className="col-sm-0 col-lg-1 col-xl-1">
                        <p></p>
                    </div>
                    <div className="col-sm-12 col-lg-10 col-xl-10">
                        <Wrapper>
                            <Jumbotron />
                        </Wrapper>
                    </div>
                    <div className="col-sm-0 col-lg-1 col-xl-1">
                        <p></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Landing;

