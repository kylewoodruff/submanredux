import React, { Component } from 'react';
import DatePicker from 'react-date-picker';
import styled from 'styled-components';
 
const DateDiv = styled.div`
    background: white;
    width: 155px;
    border: none;
`;

class DatePick extends Component {
  state = {
    date: new Date(),
  }
 
  onChange = date => this.setState({ date })
 
  render() {
    return (
      <DateDiv>
        <DatePicker
          onChange={this.onChange}
          value={this.state.date}
        />
      </DateDiv>
    )
  }
}

export default DatePick;
