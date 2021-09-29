import React from 'react';
import axios from 'axios';
import Excuse from './Excuse';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { baseUrl } from '../../settings';

const endpoint = '/excuses';
const url = `${baseUrl}${endpoint}`;

function Excuses() {
  const [excuses, setExcuses] = React.useState(null);

  const getData = async () => {
    try {
      const response = await axios.get(url);
      if (response.data) {
        const list = response.data.excuses.map((excuse) => {
          return <Excuse key={excuse.id} id={excuse.id} description={excuse.description} />
        });
        setExcuses(list);
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
        onClick={ getData }
      >Get excuses</Button>
      <ul className="list-group">
        {excuses}
      </ul>
    </Container>
  );
}

export default Excuses;
