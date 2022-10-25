import React, { useState } from 'react';
import styles from './CheckoutPage.module.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import { useGetCartQuery } from '../../../redux/cartSlice';
import { useAddOrderMutation } from '../../../redux/orderSlice';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const CheckoutPage = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit: validate,
    formState: { errors },
  } = useForm();

  const username = sessionStorage.getItem('username');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [orderNotes, setOrderNotes] = useState('');
  const [shippingValue, setShippingValue] = useState(0);

  const { data: items, isLoading, isError, error } = useGetCartQuery();
  const cart = items;

  const [addOrder] = useAddOrderMutation();

  const getTotal = () => {
    let totalQuantity = 0;
    let totalPrice = 0;
    cart &&
      cart.forEach((cart) => {
        totalQuantity += cart.item.quantity;
        totalPrice += cart.item.price * cart.quantity;
      });
    return { totalPrice, totalQuantity };
  };

  const handleSubmit = async () => {
    try {
      await addOrder({
        firstName: firstName,
        lastName: lastName,
        address: address,
        city: city,
        country: country,
        zipCode: zipCode,
        orderNotes: orderNotes,
        username: username,
        shippingCost: shippingValue,
      });
      navigate('/summary');
    } catch (err) {
      console.log(err);
    }
  };

  if (isError) {
    console.log(error);
  } else if (isLoading) {
    return (
      <Spinner animation="border" role="status" className="d-block mx-auto">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }
  return (
    <div className="pb-5">
      <h2 className={'text-center ' + styles.header}>Checkout</h2>
      <Container>
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="/cart">Cart</Breadcrumb.Item>
          <Breadcrumb.Item active>Checkout</Breadcrumb.Item>
        </Breadcrumb>
        <h5>Billing Details</h5>

        <Form onSubmit={validate(handleSubmit)}>
          <Row>
            <Col xs={12} md={12} lg={9}>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formFirstName">
                  <Form.Label>First Name*</Form.Label>
                  <Form.Control
                    {...register('firstName', {
                      required: true,
                      minLength: 2,
                      maxLength: 100,
                    })}
                    type="text"
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                  {errors.firstName && (
                    <small className="d-block form-text text-danger mt-2">
                      This field is required and has to be between 2 to 100
                      characters long.
                    </small>
                  )}
                </Form.Group>

                <Form.Group as={Col} controlId="formLastName">
                  <Form.Label>Last Name*</Form.Label>
                  <Form.Control
                    {...register('lastName', {
                      required: true,
                      minLength: 2,
                      maxLength: 100,
                    })}
                    type="text"
                    onChange={(e) => setLastName(e.target.value)}
                  />
                  {errors.lastName && (
                    <small className="d-block form-text text-danger mt-2">
                      This field is required and has to be between 2 to 100
                      characters long.
                    </small>
                  )}
                </Form.Group>
              </Row>

              <Form.Group className="mb-3" controlId="formAddress1">
                <Form.Label>Address*</Form.Label>
                <Form.Control
                  {...register('address', {
                    required: true,
                    maxLength: 500,
                  })}
                  type="text"
                  onChange={(e) => setAddress(e.target.value)}
                />
                {errors.address && (
                  <small className="d-block form-text text-danger mt-2">
                    Maximum number of characters is 500.
                  </small>
                )}
              </Form.Group>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formCity">
                  <Form.Label>City*</Form.Label>
                  <Form.Control
                    {...register('city', {
                      required: true,
                      minLength: 2,
                      maxLength: 100,
                    })}
                    type="text"
                    onChange={(e) => setCity(e.target.value)}
                  />
                  {errors.city && (
                    <small className="d-block form-text text-danger mt-2">
                      This field is required and has to be between 2 to 100
                      characters long.
                    </small>
                  )}
                </Form.Group>

                <Form.Group as={Col} controlId="formCountry">
                  <Form.Label>Country*</Form.Label>
                  <Form.Control
                    {...register('country', {
                      required: true,
                      minLength: 2,
                      maxLength: 100,
                    })}
                    type="text"
                    onChange={(e) => setCountry(e.target.value)}
                  />
                  {errors.country && (
                    <small className="d-block form-text text-danger mt-2">
                      This field is required and has to be between 2 to 100
                      characters long.
                    </small>
                  )}
                </Form.Group>

                <Form.Group as={Col} controlId="formZip">
                  <Form.Label>Zip*</Form.Label>
                  <Form.Control
                    {...register('zipCode', {
                      required: true,
                      minLength: 2,
                      maxLength: 20,
                    })}
                    type="text"
                    onChange={(e) => setZipCode(e.target.value)}
                  />
                  {errors.zipCode && (
                    <small className="d-block form-text text-danger mt-2">
                      This field is required and has to be between 2 to 20
                      characters long.
                    </small>
                  )}
                </Form.Group>

                <Form.Group className="my-3" controlId="textArea">
                  <Form.Label>Order notes (optional)</Form.Label>
                  <Form.Control
                    onChange={(e) => setOrderNotes(e.target.value)}
                    {...register('orderNotes', {
                      maxLength: 500,
                    })}
                    as="textarea"
                    rows="5"
                  />
                  {errors.orderNotes && (
                    <small className="d-block form-text text-danger mt-2">
                      Maximum number of characters is 500.
                    </small>
                  )}
                </Form.Group>
              </Row>

              <Form.Group className="mb-3" id="formCheckbox">
                <Form.Check
                  {...register('checkbox', {
                    required: true,
                  })}
                  label="Agree to terms and conditions"
                  feedbackType="invalid"
                />
                {errors.checkbox && (
                  <small className="d-block form-text text-danger mt-2">
                    You must agree before submitting
                  </small>
                )}
              </Form.Group>
            </Col>

            <Col xs={12} md={12} lg={3} className={'p-3 ' + styles.right_box}>
              <p className={'pb-3 ' + styles.summary_title}>Your order</p>
              {cart &&
                cart.map((product, index) => (
                  <div
                    className={
                      'd-flex justify-content-between mb-3 ' +
                      styles.order_summary
                    }
                    key={index}
                  >
                    <p>
                      {product.item.name} x {product.quantity}
                    </p>
                    <p>${product.item.price * product.quantity}</p>
                  </div>
                ))}
              <h6 className="my-5">
                Subtotal price: ${getTotal().totalPrice} (
                {getTotal().totalQuantity} items)
              </h6>
              <p className="pb-3 mb-0">Payment method</p>

              <Form.Check
                inline
                label="Free Shipping $0.00"
                name="group1"
                type="radio"
                id={`1`}
                onChange={() => setShippingValue(0)}
                defaultChecked={true}
              />
              <Form.Check
                inline
                label="Standard $10.00"
                name="group1"
                type="radio"
                id={`2`}
                value={10}
                onChange={() => setShippingValue(10)}
              />
              <Form.Check
                inline
                label="Express $20.00"
                name="group1"
                type="radio"
                id={`3`}
                onChange={() => setShippingValue(20)}
              />

              <h5 className="my-5">
                Total price: ${getTotal().totalPrice + shippingValue}
              </h5>

              <Button
                variant="outline-secondary"
                size="lg"
                className="my-3 "
                type="submit"
                disabled={username ? false : true}
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
