import React, { Component } from 'react'

class Clock extends Component {

  constructor (props) {
    super(props);
    this.state = {
      date: new Date(),
      location: 'Köln'
    };
  }

  componentDidMount () {
    this.timerID = setInterval(
      () => this.setState(
        {date: new Date()}
      ),
      1000
    );
  }

  componentWillUnmount () {
    clearInterval(this.timerID);
  }

  render () {
    return (
      <div>
        <h1>Hello, {this.state.location}!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

export default Clock;
