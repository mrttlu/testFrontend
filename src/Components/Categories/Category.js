import React from 'react';

function Category(props) {
  const { id, name } = props.user;
  return (
    <li className="list-group-item" >{id}. {name}</li>
  );
}

export default Category;