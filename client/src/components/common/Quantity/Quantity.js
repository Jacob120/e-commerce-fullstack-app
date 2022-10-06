import React, { useEffect, useState } from 'react';
import styles from './Quantity.module.scss';
import Button from 'react-bootstrap/Button';
import { BiPlus, BiMinus } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import { useUpdateCartMutation } from '../../../redux/cartSlice';

const Quantity = (props) => {
  const dispatch = useDispatch();
  const [updateCart, { isLoading, isFetching, isSuccess }] =
    useUpdateCartMutation();
  const [value, setValue] = useState(props.quantity || 1);

  useEffect(() => {
    if (props.onClick) {
      props.onClick(value);
    }
  }, [value, props, updateCart]);

  const handleDecrementQuantity = async (id) => {
    setValue(value > 1 && value - 1);
    if (id) {
      try {
        console.log(id, value);
        await updateCart({ id: id, quantity: value });
      } catch (err) {
        console.log(err);
      }
    }
  };

  const handleIncrementQuantity = async (id) => {
    setValue(value + 1);
    if (id) {
      try {
        console.log(id, value);
        await updateCart({ id: id, quantity: value });
      } catch (err) {
        console.log(err);
      }
    }
  };

  console.log(value);

  return (
    <span className={'d-flex justify-content-between ' + styles.root}>
      <Button
        variant="outline-dark"
        onClick={() => handleDecrementQuantity(props.id)}
      >
        <BiMinus />
      </Button>
      <input
        type="text"
        value={value}
        readOnly
        className={'text-center ' + styles.quantity_input}
      />
      <Button
        variant="outline-dark"
        onClick={() => handleIncrementQuantity(props.id)}
      >
        <BiPlus />
      </Button>
    </span>
  );
};

export default Quantity;
