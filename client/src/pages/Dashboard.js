import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Wrapper2 from "../components/Wrapper2"
import CircleChart from "../components/CircleChart";

class Dashboard extends Component {
    render() {
        return (
            <div className="container-fluid">
                <Navbar />
                <Header />
                <Wrapper2>
                    <div className="row">
                        <CircleChart />
                    </div>
                </Wrapper2>
            </div>
        )
    }
}

export default Dashboard;

