import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import Avatar from './components/Avatar'
import Entry from './components/Entry'
import ContactEntries from './components/ContactEntries'

class ContactCard extends Component {
  state = {showEntry: 'email'}

  onSelect = showEntry => this.setState({showEntry});

  render(){
    const {email, phone, gender, location, dob, picture, name} = this.props.entries[0];
    const {showEntry} = this.state;

    return (<Paper style={{width:'800px', height:'450px', marginTop:'50px'}}>
      <Avatar image={picture.large} {...name}/>
      <Entry type={showEntry} data={this.props.entries[0][showEntry]} />
      <ContactEntries entries={{email, phone, gender, location, dob}} onSelect={this.onSelect}/>
    </Paper>);
  }
}


export default ContactCard;
