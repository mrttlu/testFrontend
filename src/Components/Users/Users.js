import React from 'react';
import axios from 'axios';
import User from './User';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { baseUrl } from '../../settings';

const endpoint = '/users';
const url = `${baseUrl}${endpoint}`;

function Users() {
  const [users, setUsers] = React.useState(null);

  const getData = async () => {
    try {
      const response = await axios.get(url);
      if (response.data) {
        const list = response.data.users.map((user) => {
          return <User
            key={user.id}
            user={user} />
        });
        setUsers(list);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container>
      <h2>Users endpoint</h2>
      <Button
        variant="success"
        onClick={ getData }
      >Get users</Button>
      <ul className="list-group">
        {users}
      </ul>
    </Container>
  );
}

export default Users;
