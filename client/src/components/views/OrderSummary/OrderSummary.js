import React from 'react';
import styles from './OrderSummary.module.scss';
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';
import { selectAllOrder, useGetOrderQuery } from '../../../redux/orderSlice';
import { useSelector } from 'react-redux';

const OrderSummary = () => {
  const { data: orders, isLoading, isError, error } = useGetOrderQuery();
  const userOrder = useSelector((state) => selectAllOrder(state));
  const data = userOrder ? userOrder[0] : '';

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
      <h2 className={'text-center ' + styles.header}>Order Summary</h2>
      {data && (
        <Container>
          <h4 className="my-5">Thank you for shopping with us!</h4>
          <h5 className="my-3">Here are your order details:</h5>
          <p>
            {data.firstName} {data.lastName}
          </p>
          <p>{data.address}</p>
          <p>
            {data.city}, {data.country}, {data.zipCode}
          </p>
          {data.orderNotes && <p>Order notes: {data.orderNotes}</p>}
          <p>Shipping cost: {data.shippingCost} </p>
          <h6>Subtotal: ${data.subTotal}</h6>
          <h5 className="my-3">
            Total cost: ${data.subTotal + data.shippingCost}
          </h5>
          <h6>Have a good day!</h6>
        </Container>
      )}
    </div>
  );
};

export default OrderSummary;
