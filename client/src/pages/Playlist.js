import React, { Component } from "react";
import Navbar from "../components/Navbar.js";
import Wrapper2 from "../components/Wrapper2.js";
import Header from "../components/Header.js";

class Playlist extends Component {
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

export default Playlist;