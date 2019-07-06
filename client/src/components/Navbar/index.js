import React from "react";
import "./style.css";

// for nav
//<i className="fas fa-home fa-2x"></i>
//<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                  <span className="navbar-toggler-icon"></span>
//            </button>

function Navbar(props) {
    return (
        <div className="area">
            <nav className="main-menu">
                <ul>
                    <li>
                        <a href="/">
                            <i className="fa fa-home "></i>
                            <span className="nav-text">
                                Dashboard
                        </span>
                        </a>
                    </li>
                    <li className="has-subnav">
                        <a href="#">
                            <i className="fa fa-list fa-2x"></i>
                            <span className="nav-text">
                                Subscriptions
                        </span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fa fa-tv fa-2x"></i>
                            <span className="nav-text">
                                Watch List
                        </span>
                        </a>
                    </li>
                </ul>

                <ul className="logout">
                    <li>
                        <a href="#">
                            <i className="fa fa-cogs"></i>
                            <span className="nav-text">
                                Settings
                        </span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fa fa-sign-out fa-2x"></i>
                            <span className="nav-text">
                                Logout
                        </span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;