import React, { Component } from "react";
import Navbar from "../components/Navbar.js";
import Header from "../components/Header.js";
import { createGlobalStyle } from 'styled-components';
import SubscriptionCard from "../components/SubscriptionCard";
import Wrapper from "../components/Wrapper";
import Wrapper2 from "../components/Wrapper2.js";
import SearchBar from "../components/SearchBar";
import DatePicker from 'react-date-picker';
import { Input } from "../components/SubForm/Input";
import { FormBtn } from "../components/SubForm/FormBtn"
import API from "../utils/Api.js";
import AddSub from "../components/AddSub.js";
import styled from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    color: ${props => (props.whiteColor ? 'white' : 'black')};
    background:  black;
  }
  hr {
    background-color: white;
  }
  `;

const DateDiv = styled.div`
    background: white;
    width: 155px;
    border: none;
`;

const Form = styled.form`
margin: 5px 15px 10px 25px;
`;

class Subscriptions extends Component {
  state = {
    subscriptions: [],
    name: "",
    monthlyCost: "",
    dueDate: new Date()
  };

  componentDidMount() {
    this.loadSubscriptions();
  }

  loadSubscriptions = () => {
    API.getSubs()
      .then(res => {
        this.setState({ subscriptions: res.data[0].subs })
        console.log(this.state.subscriptions)
      })
      .catch(err => console.log(err));
  };

  deleteSubscription = id => {
    API.deleteSub(id)
      .then(res => this.loadSubscriptions())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  onChange = dueDate => this.setState({ dueDate })

  handleFormSubmit = event => {
    event.preventDefault();
    //console.log(this.state.name + this.state.monthlyCost + this.state.dueDate)
    if (this.state.name && this.state.monthlyCost && this.state.dueDate) {
      API.saveSub({
        name: this.state.name,
        cost: this.state.monthlyCost,
        dueDate: this.state.dueDate,
        createDate: Date.now()
      })
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("addBtn").style.display = "inline-block";
    this.loadSubscriptions();
  };

  openNav() {
    document.getElementById("mySidenav").style.width = "500px";
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

        <Wrapper2>
          <Navbar />

          <AddSub>
            <Form>

              <h5>Subscription Name (required) </h5>
              <Input
                value={this.state.name}
                onChange={this.handleInputChange}
                name="name"
                placeholder="Enter Subscription Name (required)"
              />

              <h5>Monthly Cost (required)</h5>
              <Input
                value={this.state.monthlyCost}
                onChange={this.handleInputChange}
                name="monthlyCost"
                placeholder="Enter Monthly Cost (00.00)"
              />

              <h5>Due Date (required)</h5>
              <DateDiv>
                <DatePicker
                  name="dueDate"
                  onChange={this.onChange}
                  value={this.state.dueDate}
                />
              </DateDiv>

              <FormBtn
                disabled={!(this.state.name && this.state.monthlyCost && this.state.dueDate)}
                onClick={this.handleFormSubmit}
              >
                Add New Subscription
              </FormBtn>

            </Form>
          </AddSub>

          <Wrapper>
            <div className="container-fluid ml-5">
              <h4 className="text-left mb-3 mt-3">My Subscriptions</h4>
              <SearchBar />
              <hr></hr>
              <div className="row">
                <Wrapper2>
                  {this.state.subscriptions.map(element => {
                    //console.log("this is element" + JSON.stringify(element));
                    return <SubscriptionCard results={element} />
                  })}
                </Wrapper2>
              </div>
            </div>
          </Wrapper>

        </Wrapper2>
      </React.Fragment>
    )
  }
}

export default Subscriptions;