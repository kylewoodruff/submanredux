import React from "react";
import Header from "../components/Header.js";
import Navbar from "../components/Navbar.js";

function NoMatch() {
    return (
        <div>
            <Navbar />
            <div className="container-fluid">
                <Header />
                <div className="row">
                    <div className="col text-center">
                        <h1>404 Page Not Found</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NoMatch;
