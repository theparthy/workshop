import React from 'react'

const Avatar = ({image = 'http://via.placeholder.com/350x150', title = "Mr.", first = "FirstName", last = "LastName"}) => {

  const fullName = `${title} ${first} ${last}`;
  return (<div style={{marginTop: '50px', flex: '1 0 auto'}}>
    <h1 style={{textTransform: 'capitalize'}}>{fullName}</h1>
    <img src={image} alt={fullName}/>
  </div>)
}

export default Avatar
