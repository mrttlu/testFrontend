import React from 'react';
import axios from 'axios';
import Category from './Category';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { baseUrl } from '../../settings';

const endpoint = '/categories';
const url = `${baseUrl}${endpoint}`;

function Categories() {
  const [categories, setCategories] = React.useState(null);

  const getData = async () => {
    try {
      const response = await axios.get(url);
      if (response.data) {
        const list = response.data.categories.map((category) => {
          return <Category
            key={category.id}
            user={category} />
        });
        setCategories(list);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container>
      <h2>Categories endpoint</h2>
      <Button
        variant="success"
        onClick={ getData }
      >Get categories</Button>
      <ul className="list-group">
        {categories}
      </ul>
    </Container>
  );
}

export default Categories;
