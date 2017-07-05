import React from 'react'
import Subheader from 'material-ui/Subheader'

const subHeadlineText = type => {
  switch (type) {
    case 'email':
      return 'My e-Mail is';
    case 'phone':
      return 'Give me call';
    case 'gender':
      return 'I am a';
    case 'location':
      return 'I live in';
    case 'dob':
      return 'I was born on ';
    default:
      return 'OOOPS!!!!!!';
  }
}
const convertData = (type, data) => {
  switch (type) {
    case 'email':
    case 'phone':
    case 'gender':
    case 'dob':
      return `${data}`;
    case 'location':
      return `${data.street}, ${data.city}, ${data.state}, ${data.postcode}`;
    default:
      return 'OOOPS!!!!!!';
  }
}

const Entry = ({type = "", data = "CRAP this is not right"}) => {

  return (<div style={{marginTop: '20px'}}>
    <Subheader>
      {subHeadlineText(type)}
    </Subheader>
    <h2>{convertData(type, data)}</h2>
  </div>)
}

export default Entry;
