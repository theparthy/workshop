import React from 'react'
import Paper from 'material-ui/Paper'
import Avatar from 'material-ui/Avatar'
import SubHeader from 'material-ui/Subheader'
import { List, ListItem } from 'material-ui/List'

const ContactList = ({persons, onSelect}) => {
  return (
    <div>
      <SubHeader style={{textAlign: "left"}}>Contacts</SubHeader>
      <Paper style={{
        width: '300px',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        height: '450px',
        overflow: 'auto',
      }}>
        <List>
          {persons.map((person, idx) => {
            const {name, picture} = person;
            const {title, first, last} = name;
            return <ListItem key={idx} primaryText={`${title} ${first} ${last}`}
                             leftAvatar={<Avatar src={picture.thumbnail}/>} onClick={() => onSelect(person)}/>
          })}
        </List>
      </Paper>
    </div>
  )
}

export default ContactList
