import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { requestContactList } from './actions'
import NoContactSelected from './components/NoContactSelected'
import ContactCard from './components/ContactCard'
import ContactList from './components/ContactList'
import logo from './logo.svg'
import './App.css'

const styles = {
  container: {
    width: '100vw',
    height: '60vh',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'flex-start'
  }
};

class App extends Component {
  state = {
    selectedContact: null,
  };

  componentDidMount () {
    this.props.requestContactList();
  }

  render () {
    const {selectedContact} = this.state;
    const {loading, contacts, error} = this.props;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h2>Welcome to React-workshop</h2>
        </div>
        <div style={styles.container}>
          <ContactList contacts={contacts} onSelect={(selectedContact) => this.setState({selectedContact})}/>
          {selectedContact == null ?
            <NoContactSelected loading={loading} error={error}/> :
            <ContactCard {...selectedContact} />
          }
        </div>
      </div>
    );
  }
}

App.propTypes = {
  contacts: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.object.isRequired,
  requestContactList: PropTypes.func.isRequired
}

const mapActionsToProps = {
  requestContactList
}

const mapStateToProps = state => ({
  contacts: state.ContactList.contacts,
  loading: state.ContactList.requestInProgress,
  error: state.ContactList.error
});

export default connect(mapStateToProps, mapActionsToProps)(App)
