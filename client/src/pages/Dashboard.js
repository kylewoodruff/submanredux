import React, { Component } from "react";
import Navbar from "../components/Navbar.js";
import Header from "../components/Header.js";
import Wrapper2 from "../components/Wrapper2.js"
import Wrapper from "../components/Wrapper.js"
import DashCard from "../components/DashCard.js";
import CircleChart from "../components/CircleChart.js";
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
                <Wrapper2>
                    <Navbar />
                    <Header />
                    <Wrapper>
                        <div className="row">
                            <div className="col">
                                <h5 className="text-center">Welcome Back ".............."!</h5>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <DashCard>
                                    <table class="table table-striped table-dark">
                                        <thead>
                                            <tr>
                                                <th scope="col">ID</th>
                                                <th scope="col">Subscription Name</th>
                                                <th scope="col">Cost Per Month</th>
                                                <th scope="col">Due Date</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>Netflix</td>
                                                <td>$14.99</td>
                                                <td>5th</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td>Hulu</td>
                                                <td>$11.99</td>
                                                <td>10th</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">3</th>
                                                <td>Amazon Prime</td>
                                                <td>$14.99</td>
                                                <td>12th</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">4</th>
                                                <td>Spotify</td>
                                                <td>$10.99</td>
                                                <td>18th</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </DashCard>
                            </div>
                            <div className="col-3">
                                <CircleChart />
                            </div>
                            <div className="col-3">
                                <p className="text-center">Whats up</p>
                            </div>
                        </div>
                    </Wrapper>
                </Wrapper2>
            </React.Fragment>
        )
    }
}

export default Dashboard;

