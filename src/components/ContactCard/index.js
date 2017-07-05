import React, { Component } from 'react'
import Paper from 'material-ui/Paper'
import SwipeableViews from 'react-swipeable-views'
import Avatar from './components/Avatar'
import Entry from './components/Entry'
import ContactEntries from './components/ContactEntries'

class ContactCard extends Component {
  state = {showEntry: 'email'}

  render () {
    const {email, phone, gender, location, dob, picture, name} = this.props.entries[0];
    const entries = {email, phone, gender, location, dob};
    return (
      <Paper style={{
        width: '800px',
        height: '450px',
        marginTop: '50px',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column'
      }}>
        <Avatar image={picture.large} {...name}/>
        <SwipeableViews index={this.state.slideIndex}>
          {Object.keys(entries).map((entry, idx) => <Entry key={idx + entry} type={entry} data={entries[entry]}/>)}
        </SwipeableViews>
        <ContactEntries entries={entries} onSelect={slideIndex => this.setState({slideIndex})}/>
      </Paper>
    );
  }
}

export default ContactCard;
