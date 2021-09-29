import React from 'react';

function User(props) {
  const { id, firstName, lastName } = props.user;
  return (
    <li className="list-group-item" >{id}. {firstName} {lastName}</li>
  );
}

export default User;