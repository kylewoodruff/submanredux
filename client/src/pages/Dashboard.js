import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Wrapper2 from "../components/Wrapper2"
import CircleChart from "../components/CircleChart";
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
                <div className="container-fluid">
                    <Navbar />
                    <Header />
                    <Wrapper2>
                        <div className="row">
                            <CircleChart />
                        </div>
                    </Wrapper2>
                </div>
            </React.Fragment>
        )
    }
}

export default Dashboard;

