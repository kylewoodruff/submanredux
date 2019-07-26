import React from "react";
import Navbar from "../components/Navbar.js";
import Header from "../components/Header.js";
import Wrapper2 from "../components/Wrapper2.js";
import Wrapper from "../components/Wrapper.js";
import DashSubs from "../components/DashSubs.js";
import DashWatchCarousel from "../components/DashWatchCarousel.js";
import CircleChart from "../components/CircleChart.js";
import DashSubCount from "../components/DashSubCount.js";
import WelcomeStatement from "../components/Welcome.js";
//import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

const DashboardStyle = createGlobalStyle`
  body {
    color: ${props => (props.whiteColor ? 'white' : 'black')};
    background:  black;
  }
  `

function Dashboard(props) {
    return (
        <React.Fragment>
            <DashboardStyle whiteColor />

            <div className="row">
                <Header />
            </div>

            <br></br>
            <br></br>
            <br></br>

            <Wrapper2>
                <Navbar />
                <Wrapper>

                    <div className="row ml-5">
                        <div className="col">
                            <WelcomeStatement />
                        </div>
                    </div>

                    <br></br>

                    <div className="container-fluid">
                        <h3 className="text-left ml-5">Subscriptions</h3>
                        <div className="ml-5 d-flex flex-wrap justify-content-center align-items-stretch">
                            <div className="d-flex">
                                <DashSubs />
                            </div>
                            <div className="d-flex">
                                <DashSubCount />
                            </div>
                            <div className="d-flex">
                                <CircleChart />
                            </div>
                        </div>

                        <br></br>

                        <h3 className="text-left ml-5">Watchlist</h3>
                        <div className="row ml-5">
                            <Wrapper2>
                                <DashWatchCarousel />
                            </Wrapper2>
                        </div>

                        <br></br>
                    </div>
                </Wrapper>
            </Wrapper2 >
        </React.Fragment>
    )
}

export default Dashboard;

