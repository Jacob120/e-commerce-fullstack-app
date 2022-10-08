import React, { useEffect, useState } from 'react';
import styles from './Quantity.module.scss';
import Button from 'react-bootstrap/Button';
import { BiPlus, BiMinus } from 'react-icons/bi';
import {
  useGetCartQuery,
  useUpdateCartMutation,
} from '../../../redux/cartSlice';

const Quantity = (props) => {
  const [updateCart] = useUpdateCartMutation();
  const { refetch } = useGetCartQuery();
  const [value, setValue] = useState(props.quantity || 1);
  const [refresh, setRefresh] = useState(false);
  const [id, setId] = useState('');

  const handleDecrementQuantity = (id) => {
    setId(id);
    setValue(value > 1 && value - 1);
    setRefresh(true);
  };

  const handleIncrementQuantity = (id) => {
    setId(id);
    setValue(value + 1);
    setRefresh(true);
  };

  useEffect(() => {
    if (props.onClick) {
      props.onClick(value);
    }
    const update = async () => {
      await updateCart({ id: id, quantity: value });
    };

    setRefresh(false);
    if (refresh) update();
  }, [refresh, refetch]);

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
