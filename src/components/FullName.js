import React from 'react';

const FullName = ({first, last, hasBirthday}) => {

  const birthdayIcon = hasBirthday ? ' - 🎂' : '';

  const fullName = `${last}, ${first}`;

  return (<h1>{fullName} {birthdayIcon}</h1>);
}


FullName.defaultProps = {
  first: "Enter",
  last: "Name"
}

export default FullName;
