import React, { Component } from 'react';

import FullName from './components/FullName';

import logo from './logo.svg';

import './App.css';

class App extends Component {
  render() {

    const hasBirthday = true;
    const Persons = [
      {
        first: 'Parththipan',
        last: 'Thaniperumkarunai',
        hasBirthday: true,
        disabled:true
      },
      {
        first: 'Parththipan',
        last: 'Thaniperumkarunai',
        hasBirthday: true,
        disabled:true
      },
      {
        first: 'Parththipan',
        last: 'Thaniperumkarunai',
        hasBirthday: true,
        disabled:true
      },
    ];

    const RenderPersons = Persons.map((Person,idx)=><FullName key={idx} {...Person} />)

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React-workshop</h2>
        </div>
        {RenderPersons}
      </div>
    );
  }
}

export default App;
