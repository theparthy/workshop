import React from 'react'
import PropTypes from 'prop-types'
import Paper from 'material-ui/Paper'
import Avatar from 'material-ui/Avatar'
import SubHeader from 'material-ui/Subheader'
import { List, ListItem } from 'material-ui/List'

const styles = {
  Paper: {
    width: '300px',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    height: '450px',
    overflow: 'auto',
  }
}

const ContactList = ({contacts, onSelect}) => {
  return (
    <div>
      <SubHeader style={{textAlign: "left"}}>Contacts</SubHeader>
      <Paper style={styles.Paper}>
        <List>
          {contacts.map((contact, idx) => {
            const {name: {title, first, last}, picture} = contact;
            return <ListItem key={idx} primaryText={`${title} ${first} ${last}`}
                             leftAvatar={<Avatar src={picture.thumbnail}/>} onClick={() => onSelect(contact)}/>
          })}
        </List>
      </Paper>
    </div>
  )
}

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired
}


export default ContactList
