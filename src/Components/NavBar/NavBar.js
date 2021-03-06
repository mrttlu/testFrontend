import Nav from 'react-bootstrap/Nav';
import { baseUrl } from '../../settings';

const apiDocsUrl = `${ baseUrl }/api-docs`;
 

function NavBar() {
  return (
    <Nav className="justify-content-center" activeKey="/home">
      <Nav.Item>
        <Nav.Link href="/home">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href={ apiDocsUrl } target="_blank">API docs</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default NavBar;
