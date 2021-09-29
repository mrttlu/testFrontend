import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavBar from '../NavBar/NavBar';
import Excuses from '../Excuses/Excuses';
import Users from '../Users/Users';
import Categories from '../Categories/Categories';

function App() {
  return (
    <Container>
      <NavBar />
      <Row>
        <Col>
          <Users />
        </Col>
        <Col>
          <Excuses />
        </Col>
      </Row>
      <Row>
        <Col>
          <Categories />
        </Col>
        <Col>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
