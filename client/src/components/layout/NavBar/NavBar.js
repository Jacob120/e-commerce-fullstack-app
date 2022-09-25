import React from 'react';
import styles from './NavBar.module.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { BsCart, BsSearch } from 'react-icons/bs';

const NavBar = () => {
  return (
    <Navbar expand="lg" sticky="top" className={styles.root}>
      <Container fluid>
        <Navbar.Brand href="#home">
          <img
            src="./images/logo2.jpg"
            alt="logo"
            className="img-fluid"
            width={'120px'}
          ></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-between"
        >
          <Nav className="px-5 my-2 my-lg-0">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Categories</Nav.Link>
            <NavDropdown title="Categories" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Row className="justify-content-end">
            <Col className="col-8">
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-secondary">
                  <BsSearch />
                </Button>
              </Form>
            </Col>
            <Col className="col-4">
              <Button variant="outline-secondary">
                <BsCart />
              </Button>
            </Col>
          </Row>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
