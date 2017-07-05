import React from 'react'

const Avatar = ({image = 'http://via.placeholder.com/350x150', first = "FirstName", last = "LastName"}) => {

  const fullName = `${last}, ${first}`;
  return (<div style={{marginTop: '50px'}}>
    <img src={image} alt={fullName}/>
    <h1>{fullName}</h1>
  </div>)
}

export default Avatar
