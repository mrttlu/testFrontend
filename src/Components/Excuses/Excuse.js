import React from 'react';

function Excuse(props) {
  console.log(props);
  return (
    <li className="list-group-item" key={props.id}>{props.description}</li>
  );
}

export default Excuse;