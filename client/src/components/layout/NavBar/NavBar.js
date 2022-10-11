import React, { useEffect } from 'react';
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
import { Link } from 'react-router-dom';
import { useGetCartQuery } from '../../../redux/cartSlice';
import { useLocation } from 'react-router-dom';

const NavBar = () => {
  const user = sessionStorage.getItem('username');
  let location = useLocation();

  useEffect(() => {}, [location]);

  const { data: items } = useGetCartQuery();
  const cart = items;

  const getTotalQuantity = () => {
    let total = 0;

    user &&
      cart &&
      cart.forEach((item) => {
        total += item.quantity;
      });
    return total;
  };

  return (
    <Navbar expand="lg" sticky="top" className={styles.root}>
      <Container>
        <Navbar.Brand href="/">
          <img
            src="/images/logo2.jpg"
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
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/">Shop</Nav.Link>
            <NavDropdown title="Categories" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Men's</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Women's</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">All</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Row className="justify-content-end">
            <Col className="col-8">
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  className={'me-2 ' + styles.search_input}
                />
                <Button variant="outline-secondary">
                  <BsSearch />
                </Button>
              </Form>
            </Col>
            <Col className="col-4">
              <Link
                to="/cart"
                className={
                  'd-flex align-items-center justify-content-around ' +
                  styles.cart_icon
                }
              >
                <Button variant="outline-secondary">
                  <BsCart />
                </Button>
                <p
                  className={
                    'd-flex align-items-center justify-content-center m-0 p-1 ' +
                    styles.cart_quantity
                  }
                >
                  {getTotalQuantity() || 0}
                </p>
              </Link>
            </Col>
          </Row>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
