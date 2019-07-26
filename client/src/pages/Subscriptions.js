import React, { Component } from "react";
import Navbar from "../components/Navbar.js";
import Header from "../components/Header.js";
import { createGlobalStyle } from 'styled-components';
import SubscriptionCard from "../components/SubscriptionCard";
import Wrapper from "../components/Wrapper"; 
import Wrapper2 from "../components/Wrapper2.js";
import SearchBar from "../components/SearchBar";
import AddSub from "../components/AddSub.js";

const GlobalStyle = createGlobalStyle`
  body {
    color: ${props => (props.whiteColor ? 'white' : 'black')};
    background:  black;
  }
  hr {
    background-color: white;
  }
  `;


class Subscriptions extends Component {
  render() {
    return (
      <React.Fragment>
        <GlobalStyle whiteColor />
        <div className="row">
          <Header />
        </div>

        <br></br>
        <br></br>
        <br></br>
        <Wrapper2>
          <Navbar />
          <AddSub />
          <Wrapper>
            <div className="container-fluid ml-5">
              <h4 className="text-left">My Subscriptions</h4>
              <SearchBar />
              <hr></hr>
              <div className="row">
                <SubscriptionCard />
              </div>
            </div>
          </Wrapper>
        </Wrapper2>

      </React.Fragment>
    )
  }
}

export default Subscriptions;