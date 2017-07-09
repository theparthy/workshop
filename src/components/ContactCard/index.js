import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Paper from 'material-ui/Paper'
import SwipeableViews from 'react-swipeable-views'
import Avatar from './components/Avatar'
import Entry from './components/Entry'
import ContactEntries from './components/ContactEntries'

const styles = {
  Paper: {
    width: '800px',
    height: '450px',
    marginTop: '50px',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column'
  }
};

class ContactCard extends Component {
  state = {
    showEntry: 'email',
    slideIndex: 0
  }

  render () {
    const {email, phone, gender, location, dob, picture, name} = this.props;
    const entries = {email, phone, gender, location, dob};
    return (
      <Paper style={styles.Paper}>
        <Avatar image={picture.large} {...name}/>
        <SwipeableViews index={this.state.slideIndex}>
          {Object.keys(entries).map((entry, idx) => <Entry key={idx} type={entry} data={entries[entry]}/>)}
        </SwipeableViews>
        <ContactEntries entries={Object.keys(entries)} onSelect={slideIndex => this.setState({slideIndex})}/>
      </Paper>
    );
  }
}

ContactCard.propTypes = {
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  location: PropTypes.object.isRequired,
  dob: PropTypes.string.isRequired,
  picture: PropTypes.object.isRequired,
  name: PropTypes.object.isRequired,
}

export default ContactCard;
