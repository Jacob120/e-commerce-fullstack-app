import React, { useEffect, useState } from 'react';
import styles from './CartPage.module.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import { BsTrash } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Quantity from '../../common/Quantity/Quantity';
import {
  useDeleteCartItemMutation,
  useGetCartQuery,
} from '../../../redux/cartSlice';

const CartPage = () => {
  const dispatch = useDispatch();
  const user = sessionStorage.getItem('username');

  const [deleteCartItem] = useDeleteCartItemMutation();
  const {
    data: items,
    isSuccess,
    isLoading,
    isError,
    error,
    refetch,
  } = useGetCartQuery();

  const data = items;

  const [shippingValue, setShippingValue] = useState(0);
  const [refresh, setRefresh] = useState(false);

  const getTotal = () => {
    let totalQuantity = 0;
    let totalPrice = 0;
    user &&
      data &&
      data.forEach((cart) => {
        totalQuantity += cart.item.quantity;
        totalPrice += cart.item.price * cart.quantity;
      });
    return { totalPrice, totalQuantity };
  };

  const handleRemoveFromCart = async (id) => {
    try {
      await deleteCartItem(id).unwrap();
      setRefresh(true);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmit = () => {
    console.log('test');
  };

  useEffect(() => {
    dispatch(refetch);
    setRefresh(false);
  }, [refresh, refetch, dispatch]);

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
    <div className={'pb-5 ' + styles.root}>
      <h2 className={'text-center ' + styles.header}>Shopping Cart</h2>
      <Container>
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Cart</Breadcrumb.Item>
        </Breadcrumb>
        <Row>
          <Col xs={12} md={12} lg={9}>
            <Table className="text-center">
              <thead>
                <tr>
                  <th>Product</th>
                  <th></th>
                  <th>Size</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th></th>
                </tr>
              </thead>
              {user &&
                data &&
                data.map((product, index) => (
                  <tbody key={index}>
                    <tr>
                      <td className="col-2 m-0 pr-5 text-center ">
                        <img
                          src={product.item.image}
                          alt="boots"
                          className={styles.image}
                        />
                      </td>
                      <td className="col-2 py-5 ">{product.item.name}</td>
                      <td className="col-2 py-5 ">{product.size}</td>
                      <td className="col-2 py-5 ">${product.item.price}</td>
                      <td className="col-2  py-5 ">
                        <Quantity quantity={product.quantity} id={product.id} />
                      </td>
                      <td className="col-2  py-5 ">
                        ${product.item.price * product.quantity}
                      </td>
                      <td className="col-1  py-5">
                        <Button
                          variant="outline-dark"
                          size="sm"
                          onClick={() => handleRemoveFromCart(product.id)}
                        >
                          <BsTrash />
                        </Button>
                      </td>
                    </tr>
                  </tbody>
                ))}
            </Table>
          </Col>
          <Col xs={12} md={12} lg={3} className={styles.right_box}>
            <p className={'p-3 ' + styles.summary_title}>Cart Total</p>
            <p className={'p-3 ' + styles.summary_title}>
              Subtotal: ${getTotal().totalPrice} ({getTotal().totalQuantity}{' '}
              items)
            </p>
            <p className="px-3 mb-0">Shipping</p>
            <Form className={'p-3 ' + styles.shipping_form}>
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
            </Form>
            <p className="mt-3 px-3">
              Total price: $ ${getTotal().totalPrice + shippingValue}
            </p>
            <Link to="/checkout">
              <Button
                type="submit"
                variant="outline-secondary"
                size="lg"
                className="mx-3 mb-3 "
                onClick={handleSubmit}
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
