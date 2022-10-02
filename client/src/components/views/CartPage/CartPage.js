import React from 'react';
import styles from './CartPage.module.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { BsTrash } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const CartPage = () => {
  return (
    <div className={'pb-5 ' + styles.root}>
      <h2 className={'text-center ' + styles.header}>Shopping Cart</h2>
      <Container>
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Cart</Breadcrumb.Item>
        </Breadcrumb>
        <Row>
          <Col xs={12} md={12} lg={9}>
            <Table>
              <thead>
                <tr>
                  <th>Product</th>
                  <th></th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="col-2 m-0 pr-5 text-center ">
                    <img
                      src="/images/products/men-boots.1.1.png"
                      alt="boots"
                      className={styles.image}
                    />
                  </td>
                  <td className="col-3 py-5 ">Name</td>
                  <td className="col-2 py-5 ">$35</td>
                  <td className="col-2  py-5 ">Otto</td>
                  <td className="col-2  py-5 ">$35</td>
                  <td className="col-1  py-5">
                    <Button variant="outline-dark" size="sm">
                      <BsTrash />
                    </Button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Col>
          <Col xs={12} md={12} lg={3} className={styles.right_box}>
            <p className={'p-3 ' + styles.summary_title}>Cart Total</p>
            <p className="px-3 mb-0">Shipping</p>
            <Form className={'p-3 ' + styles.shipping_form}>
              <Form.Check
                inline
                label="Free Shipping $0.00"
                name="group1"
                type="radio"
                id={`1`}
              />
              <Form.Check
                inline
                label="Standard $10.00"
                name="group1"
                type="radio"
                id={`2`}
              />
              <Form.Check
                inline
                label="Express $20.00"
                name="group1"
                type="radio"
                id={`3`}
              />
            </Form>
            <p className="mt-3 px-3">Total price: $35</p>
            <Link to="/checkout">
              <Button
                variant="outline-secondary"
                size="lg"
                className="mx-3 mb-3 "
              >
                Proceed to checkout
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CartPage;
