import React from 'react';
import styles from './CheckoutPage.module.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const CheckoutPage = () => {
  return (
    <div>
      <h2 className={'text-center ' + styles.header}>Checkout</h2>
      <Container>
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Checkout</Breadcrumb.Item>
        </Breadcrumb>
        <h5>Billing Details</h5>

        <Form>
          <Row>
            <Col xs={12} md={12} lg={9}>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formFirstName">
                  <Form.Label>First Name*</Form.Label>
                  <Form.Control type="text" required />
                </Form.Group>

                <Form.Group as={Col} controlId="formLastName">
                  <Form.Label>Last Name*</Form.Label>
                  <Form.Control type="text" required />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3" controlId="formAddress1">
                <Form.Label>Address*</Form.Label>
                <Form.Control required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formAddress2">
                <Form.Label>Address 2</Form.Label>
                <Form.Control />
              </Form.Group>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formCity">
                  <Form.Label>City*</Form.Label>
                  <Form.Control required />
                </Form.Group>

                <Form.Group as={Col} controlId="formCity">
                  <Form.Label>Country*</Form.Label>
                  <Form.Control required />
                </Form.Group>
                <Form.Group as={Col} controlId="formZip">
                  <Form.Label>Zip*</Form.Label>
                  <Form.Control required />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3" id="formCheckbox">
                <Form.Check
                  required
                  label="Agree to terms and conditions"
                  feedback="You must agree before submitting."
                  feedbackType="invalid"
                />
              </Form.Group>
            </Col>

            <Col xs={12} md={12} lg={3} className={'p-3 ' + styles.right_box}>
              <p className={'pb-3 ' + styles.summary_title}>Your order</p>
              <div
                className={
                  'd-flex justify-content-between ' + styles.order_summary
                }
              >
                <p>Name of product</p>
                <p>$35</p>
              </div>
              <h5 className="my-5">Total price: $35</h5>
              <p className="pb-3 mb-0">Payment method</p>
              <Form.Group className="mb-3" id="formCheckbox">
                <div
                  className={'d-flex flex-column pb-3 ' + styles.payment_form}
                >
                  <Form.Check
                    inline
                    label="Direct bank transfer"
                    name="group1"
                    type="radio"
                    id={`1`}
                  />
                  <Form.Check
                    inline
                    label="Paypal"
                    name="group1"
                    type="radio"
                    id={`2`}
                  />
                  <Form.Check
                    inline
                    label="Credit Card"
                    name="group1"
                    type="radio"
                    id={`3`}
                  />
                </div>
              </Form.Group>
              <Button
                variant="outline-secondary"
                size="lg"
                className="my-3 "
                type="submit"
              >
                Place Order
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
};

export default CheckoutPage;
