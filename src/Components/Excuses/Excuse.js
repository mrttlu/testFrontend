import React from 'react';

function Excuse(props) {
  const { id, description } = props.excuse;
  return (
    <li className="list-group-item" >{id}. {description}</li>
  );
}

export default Excuse;