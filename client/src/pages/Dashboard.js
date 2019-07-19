import React, { Component } from "react";
import Navbar from "../components/Navbar.js";
import Header from "../components/Header.js";
import Wrapper2 from "../components/Wrapper2.js"
import Wrapper from "../components/Wrapper.js"
import DashCard from "../components/DashCard.js";
import CircleChart from "../components/CircleChart.js";
import DashSubCount from "../components/DashSubCount.js";
import { createGlobalStyle } from 'styled-components';

const DashboardStyle = createGlobalStyle`
  body {
    color: ${props => (props.whiteColor ? 'white' : 'black')};
    background:  black;
  }
  `

class Dashboard extends Component {
    render() {
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
                        <div className="row">
                            <div className="col">
                                {/* this welcome line will be a component */}
                                <h5 className="text-center">Welcome Back ".............."!</h5>
                            </div>
                        </div>
                        <div className="row">
                            {/* this table will be a component */}
                            <div className="col-sm-5 col-md-5 col-lg-5 col-xl-5">
                                <table class="table table-striped table-dark">
                                    <thead>
                                        <tr>
                                            <th scope="col">ID</th>
                                            <th scopre="col">Sub Pic</th>
                                            <th scope="col">Subscription Name</th>
                                            <th scope="col">Cost Per Month</th>
                                            <th scope="col">Due Date</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Img</td>
                                            <td>Netflix</td>
                                            <td>$14.99</td>
                                            <td>5th</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Img</td>
                                            <td>Hulu</td>
                                            <td>$11.99</td>
                                            <td>10th</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>Img</td>
                                            <td>Amazon Prime</td>
                                            <td>$14.99</td>
                                            <td>12th</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">4</th>
                                            <td>Img</td>
                                            <td>Spotify</td>
                                            <td>$10.99</td>
                                            <td>18th</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4 justify-content-center">
                                <CircleChart />
                            </div>
                            <div className="col-sm-3 col-md-3 col-lg-3 col-xl-3 justify-content-center">
                                <DashCard>
                                    <DashSubCount>
                                        21
                                    </DashSubCount>
                                </DashCard>
                            </div>
                        </div>
                        <div className="row">
                            {/* this table will be a component */}
                            <div className="col-sm-5 col-md-5 col-lg-5 col-xl-5">
                                <table class="table table-striped table-dark">
                                    <thead>
                                        <tr>
                                            <th scope="col">ID</th>
                                            <th scopre="col">Sub Pic</th>
                                            <th scope="col">Subscription Name</th>
                                            <th scope="col">Cost Per Month</th>
                                            <th scope="col">Due Date</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Img</td>
                                            <td>Netflix</td>
                                            <td>$14.99</td>
                                            <td>5th</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Img</td>
                                            <td>Hulu</td>
                                            <td>$11.99</td>
                                            <td>10th</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>Img</td>
                                            <td>Amazon Prime</td>
                                            <td>$14.99</td>
                                            <td>12th</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">4</th>
                                            <td>Img</td>
                                            <td>Spotify</td>
                                            <td>$10.99</td>
                                            <td>18th</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4 justify-content-center">
                                <CircleChart />
                            </div>
                            <div className="col-sm-3 col-md-3 col-lg-3 col-xl-3 justify-content-center">
                                <DashCard>
                                    <DashSubCount>
                                        10
                                    </DashSubCount>
                                </DashCard>
                            </div>
                        </div>
                    </Wrapper>
                </Wrapper2>
            </React.Fragment>
        )
    }
}

export default Dashboard;

