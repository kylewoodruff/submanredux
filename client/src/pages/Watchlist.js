import React, { Component } from "react";
import Navbar from "../components/Navbar.js";
import Wrapper2 from "../components/Wrapper2.js";
import Header from "../components/Header.js";
import api from "../utils/mainAPI"

import WatchlistCard from "../components/WatchlistCard.js";

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    color: ${props => (props.whiteColor ? 'white' : 'black')};
  }
  `


class Watchlist extends Component {
    state = {
        result: [],
        search: ""
    }

    handleMovie = event => {
        event.preventDefault();
        this.searchMovie(this.state.search);

    };

    handleInputChange = event => {
        event.preventDefault();
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    searchMovie = query => {
        api.search(query)
            .then(res => {
                this.setState({ result: res.data })

                console.log(res.data)

            })
            .catch(err => console.log(err));
    };

    render() {
        return (
            <React.Fragment>
                <GlobalStyle whiteColor />
                <Header />
                <Wrapper2>

                    <Header />
                    <div className="container">
                        <div className="row">
                            <div className="col-2">
                                <p></p>
                            </div>
                            <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" name="search" onChange={this.handleInputChange} value={this.state.search}></input>
                            <h1><button className="btn btn-danger" onClick={this.handleMovie}>Test</button></h1>

                    <Navbar />

                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>

                    <div className="row">
                        <div className="col">
                            <p></p>

                        </div>
                        <div className="row">
                            <div className="col-4">
                                <WatchlistCard
                                    result={this.state.result}></WatchlistCard>



                            </div>
                        </div>


                    </div>
                </Wrapper2>
            </React.Fragment>
        )
    }
};


export default Watchlist;