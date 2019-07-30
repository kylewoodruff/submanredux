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
    font-family: 'Roboto', sans-serif;
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

const ActionButton = styled.a`
    margin-left: 15px;
    padding-top: 1px;
    padding-bottom: 1px;
    margin-top: 1px;
    margin-bottom: 1px;
    color: white;
    font-size: 1.5em;

    :hover {
        color: #0325FB;
    }
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
      .then(res => console.log(res))
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
    this.componentDidMount();
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
            <div className="container-fluid">

              <h4 className="text-left mb-3 mt-3">My Subscriptions</h4>
              <SearchBar />
              <hr></hr>

              <div className="d-flex flex-wrap justify-content-center">

                {this.state.subscriptions.map(element => {
                  //console.log("this is element" + JSON.stringify(element));
                  return (
                    <div className="d-flex flex-sm-{shrink}-1">
                      <SubscriptionCard results={element}>
                        <ActionButton href="#" onClick={this.openNav}>
                          <i className="fa fa-edit"></i>
                        </ActionButton>
                        <ActionButton href="#" onClick={this.deleteSubscription()} className="remove">
                          <i className="fa fa-trash"></i>
                        </ActionButton>
                      </SubscriptionCard>
                    </div>
                  )
                })}


              </div>
            </div>
          </Wrapper>



        </Wrapper2>
      </React.Fragment>
    )
  }
}

export default Subscriptions;