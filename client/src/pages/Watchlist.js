import React, { Component } from "react";
import Navbar from "../components/Navbar.js";
import Wrapper2 from "../components/Wrapper2.js";
import Header from "../components/Header.js";
import api from "../utils/mainAPI"
import { createGlobalStyle } from 'styled-components';
import Api from "../utils/Api";
import ViewCard from "../components/ViewCard.js";
import styled from 'styled-components';
import Wrapper from "../components/Wrapper";
import { BrowserRouter as browserHistory } from "react-router-dom";

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
        watchlist: [],


    }


    componentDidMount() {
        this.loadWatchlist();
    };


    loadWatchlist() {
        Api.watchlistLoad()
            .then(res => this.setState({ watchlist: res.data[0].watchlist }))
            .catch(err => console.log(err));

    }

    deleteShow = id => {
        Api.deleteMovie(id)
            .then(res => this.loadBooks())
            .catch(err => console.log(err));
    };

    handleRouteChanged = () =>{
        this.props.history.push('/watchlist/search');
    }
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
                <Navbar />
                <Wrapper2>
                <Wrapper>
                    <div className="container-fluid ml-5">
                        <div className='row d-flex justify-content-between mt-3'>
                        <Saved className='d-flex '><h4 className="mt-3">My Watchlist</h4></Saved>
                        <a className='btn btn-dark btn-lg' href='/watchlist/search'>Search
                        </a>
                        </div>

                        <hr></hr>
                        <div className="row">

                            

                            <div className="row">
                                <div className="d-flex flex-wrap">
                                    {
                                        this.state.watchlist.map(element => {
                                            return <ViewCard results={element} />
                                        })

                                    }
                                </div>
                            </div>

                        </div>
                    </div>
                    </Wrapper>
                </Wrapper2>

            </React.Fragment>
        )
    }
};

export default Watchlist;