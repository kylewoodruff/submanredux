import React, { Component } from "react";
import Navbar from "../components/Navbar.js";
import Wrapper2 from "../components/Wrapper2.js";
import Header from "../components/Header.js";
import api from "../utils/mainAPI"
import WatchlistCard from "../components/WatchlistCard.js";

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
            <div>
                <Header />
                <Navbar />
                <Wrapper2>
                    <Header />
                    <div className="container ">
                        <div className="row">
                            <div className="col-2 mt-5">
                                <p></p>
                            </div>
                            <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" name="search" onChange={this.handleInputChange} value={this.state.search}></input>
                            <h1><button className="btn btn-danger" onClick={this.handleMovie}>Test</button></h1>
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
        )
    }
};

export default Watchlist;