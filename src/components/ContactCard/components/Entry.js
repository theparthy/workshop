import React from 'react'
import Subheader from 'material-ui/Subheader'

const subHeadlineText = type => {
  const Headlines = {
    email: 'My e-Mail is',
    phone: 'Give me call',
    gender: 'I am a',
    location: 'I live in',
    dob: 'I was born on',
  };
  try {
      return Headlines[type];
  }catch (e){
      throw new Error('HeadLine Text not Found');
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
