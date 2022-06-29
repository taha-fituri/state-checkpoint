import React from "react";
import "../../App.css";
import "./NavBar.css";
import logo from "../../image/logo.png";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

const NavBar = () => {
  return (
    <>
      {/* NavBar Code */}
      <Navbar className="Nav" fixed="top" bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#">
            <img src={logo} width="60px" alt="logo"></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className="Navscrol">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px", paddingLeft: "20%" }}
              navbarScroll
            >
              <Nav.Link href="http://localhost:3000/">Home</Nav.Link>
              <Nav.Link href="#action2">Contact US</Nav.Link>
              <Nav.Link href="#action2">Courses</Nav.Link>
              <Nav.Link href="#action2">Developer</Nav.Link>
              <NavDropdown title="Skilles" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">HTML & CSS</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Js & JSX</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Other Skilles
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#" disabled>
                SingUp
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-primary">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default NavBar;
