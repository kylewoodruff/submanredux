import React, { Component } from "react";
import Navbar from "../components/Navbar.js";
import Wrapper2 from "../components/Wrapper2.js";
import Header from "../components/Header.js";
import api from "../utils/mainAPI"
import WatchlistCard from "../components/WatchlistCard.js";
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    color: ${props => (props.whiteColor ? 'white' : 'black')};
    background:  black;
  }
  hr {
      background: white;
  }`;


const Saved = styled.div`
color: white;
`;

class Watchlist extends Component {
    state = {
        result: [],
        search: "",
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
                <div>
                    <div className='row'>
                        <Header />
                    </div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <Wrapper2>
                    <Navbar />
                        <div className="container">
                            <br></br>
                            <div className='row d-flex justify-content-between'>
                                <Saved className='d-flex '><h4 className="mt-3">Search</h4></Saved>
                                <a className='btn btn-dark btn-lg' href='/watchlist'>My Watchlist
                        </a>
                            </div>

                            <hr></hr>
                            <div className="row">
                                <div className="col-2 mt-5">
                                    <p></p>
                                </div>
                                <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" name="search" onChange={this.handleInputChange} value={this.state.search}></input>
                                <h1><button className="btn btn-dark " onClick={this.handleMovie}>Search</button></h1>
                            </div>

                            <div className="d-flex flex-wrap">

                                {
                                    this.state.result.map(element => {
                                        console.log(element);
                                        return <WatchlistCard results={element} />



                                    })
                                }

                            </div>

                        </div>
                    </Wrapper2>
                </div>
            </React.Fragment>
        )
    }
};

export default Watchlist;