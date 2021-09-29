import React from 'react';
import axios from 'axios';
import Excuse from './Excuse';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { baseUrl } from '../../settings';

const endpoint = '/excuses';
const randomEndpoint = '/excuses/random'
const url = `${baseUrl}${endpoint}`;
const randomUrl = `${baseUrl}${randomEndpoint}`;

function Excuses() {
  const [excuses, setExcuses] = React.useState(null);

  const getExcuses = async () => {
    try {
      const response = await axios.get(url);
      if (response.data) {
        const list = response.data.excuses.map((excuse) => {
          return <Excuse key={excuse.id} excuse={excuse} />
        });
        setExcuses(list);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const getRandomExcuse = async () => {
    try {
      const response = await axios.get(randomUrl);
      if (response.data) {
        const { excuse } = response.data;
        const item = <Excuse key={excuse.id} excuse={excuse} />
        setExcuses(item);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container>
      <h2>Excuses endpoint</h2>
      <Button
        variant="success"
        onClick={ getExcuses }
      >Get excuses</Button>
      <Button
        variant="success"
        onClick={ getRandomExcuse }
      >Get random excuses</Button>
      <ul className="list-group">
        {excuses}
      </ul>
    </Container>
  );
}

export default Excuses;
