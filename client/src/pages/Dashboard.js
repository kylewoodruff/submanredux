import React, { Component } from "react";
import Navbar from "../components/Navbar";

import api from "../utils/mainAPI"

class Dashboard extends Component {

    state = {
        result: [],
        search: ""


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
    handleMovie = event => {
    event.preventDefault();
    this.searchMovie(this.state.search);
    console.log(this.state.result)

};
handleInputChange = event => {
    event.preventDefault();
    const { name, value } = event.target;
        this.setState({
          [name]: value
        });
}

searchMovie = query => {
    api.search(query)

        .then(res => {
            console.log(res.data.results); 
            this.setState({ result: res.data.results })})
        .catch(err => console.log(err));
};
render() {
    return (
        <div>
           <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" name="search" onChange={this.handleInputChange} value={this.state.search}></input>
            <h1><button className="btn btn-danger" onClick={this.handleMovie}>Test</button></h1>
            
        </div>
    )
}
}

export default Dashboard;

