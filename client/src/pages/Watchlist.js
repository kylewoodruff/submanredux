import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Wrapper2 from "../components/Wrapper2";
import Header from "../components/Header";

class Watchlist extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Wrapper2>
                    <Header />
                </Wrapper2>
            </div>
        )
    }
}

export default Watchlist;