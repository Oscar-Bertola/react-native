import CartWidget from "./CardWidget";
import { Navbar, Container, NavDropdown, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Link to="/">
          <Navbar.Brand>Tienda</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav>Home</Nav>
            <Nav></Nav>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item>Remeras</NavDropdown.Item>
              <NavDropdown.Item>Pantalones</NavDropdown.Item>
              <NavDropdown.Item>Bermudas</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>Accesorios</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <CartWidget />
      </Container>
    </Navbar>
  );
};
export default NavBar;