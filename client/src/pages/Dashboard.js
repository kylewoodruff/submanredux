import React, { Component } from "react";
import Navbar from "../components/Navbar.js";
import Header from "../components/Header.js";
import Wrapper2 from "../components/Wrapper2.js"
import Wrapper from "../components/Wrapper.js"
import Img from "../assets/images/wtlogontg.png"
import DashSubs from "../components/DashSubs.js";
import DashCard from "../components/DashCard.js";
import CircleChart from "../components/CircleChart.js";
import DashSubCount from "../components/DashSubCount.js";
import WelcomeStatement from "../components/Welcome.js"
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

const DashboardStyle = createGlobalStyle`
  body {
    color: ${props => (props.whiteColor ? 'white' : 'black')};
    background:  black;
  }
  `

const Image = styled.img`
  height: 180px;
  width: 500px;
`;

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

                        <div className="row ml-5">
                            <div className="col">
                                <WelcomeStatement />
                            </div>
                        </div>

                        <br></br>

                        <div className="container-fluid">
                            <h4 className="text-left ml-5">Subscriptions</h4>
                            <div className="row ml-5 d-flex flex-wrap justify-content-around align-items-center">
                                {/* this table/card will be a component */}
                                <div className="col-6 d-flex">
                                    <DashSubs />
                                    {/* <table className="table table-striped table-dark">
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
                                                <th scope="row">4</th>
                                                <td>Img</td>
                                                <td>Spotify</td>
                                                <td>$10.99</td>
                                                <td>18th</td>
                                            </tr>
                                        </tbody>
                                    </table> */}
                                </div>
                                <div className="col-3 d-flex">
                                    <DashSubCount>
                                        21
                                    </DashSubCount>
                                </div>
                                <div className="col-3 d-flex">
                                    <CircleChart />
                                </div>
                            </div>
                            <div className="row ml-5">
                                <div className="container-fluid">
                                    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                                        <ol className="carousel-indicators">
                                            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                        </ol>
                                        <div className="carousel-inner">
                                            <div className="carousel-item active">
                                                <Image src={Img} className="d-block w-100" alt="submerge" />
                                            </div>
                                            <div className="carousel-item">
                                                <Image src={Img} className="d-block w-100" alt="submerge" />
                                            </div>
                                            <div className="carousel-item">
                                                <Image src={Img} className="d-block w-100" alt="submerge" />
                                            </div>
                                        </div>
                                        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span className="sr-only">Previous</span>
                                        </a>
                                        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span className="sr-only">Next</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Wrapper>
                </Wrapper2>
            </React.Fragment>
        )
    }
}

export default Dashboard;

