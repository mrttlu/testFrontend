import React from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { baseUrl } from '../../settings';

const endpoint = '/ping';
const url = `${baseUrl}${endpoint}`;

function Ping() {
  const [ping, setPing] = React.useState({message: null});

  const getData = async () => {
    try {
      const response = await axios.get(url);
      if (response.data) {
        setPing(response.data);
      }
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container>
      <h2>Ping endpoint</h2>
      <Button
        variant="success"
        onClick={ getData }
      >Ping</Button>
      <h3>{ping.message}</h3>
    </Container>
  );
}

export default Ping;
