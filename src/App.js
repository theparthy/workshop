import React, { Component } from 'react'
import NoContactSelected from './components/NoContactSelected'
import ContactCard from './components/ContactCard'
import ContactList from './components/ContactList'
import { getRandomUser } from './helpers/apiClient'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  state = {
    Persons: [],
    selectedPerson: null,
    loading: true,
    error: null
  };

  componentDidMount () {
    this.setState({loading: true, selectedPerson: null});
    getRandomUser()
      .then((response) => {
        this.setState({Persons: response.results, loading: false, error: null})
      })
      .catch((error) => {
        this.setState({error, loading: false})
      });
  }

  render () {
    const {Persons, selectedPerson, error, loading} = this.state;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h2>Welcome to React-workshop</h2>
        </div>
        <div style={{
          width: '100vw',
          height: '60vh',
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'flex-start'
        }}>
          <ContactList persons={Persons} onSelect={(selectedPerson) => this.setState({selectedPerson})}/>
          {selectedPerson == null ?
            <NoContactSelected loading={loading} error={error}/> :
            <ContactCard person={selectedPerson}/>
          }
        </div>
      </div>
    );
  }
}

export default App;
