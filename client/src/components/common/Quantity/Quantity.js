import React, { useEffect, useState } from 'react';
import styles from './Quantity.module.scss';
import Button from 'react-bootstrap/Button';
import { BiPlus, BiMinus } from 'react-icons/bi';
import { useDispatch } from 'react-redux';

const Quantity = (props) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState(props.quantity || 1);

  useEffect(() => {
    if (props.onClick) {
      props.onClick(value);
    } else {
      setValue(props.quantity);
    }
  }, [value, props.quantity]);

  return (
    <span className={'d-flex justify-content-between ' + styles.root}>
      <Button variant="light" onClick={() => setValue(value > 1 && value - 1)}>
        <BiMinus />
      </Button>
      <input
        type="text"
        value={value}
        readOnly
        className={'text-center ' + styles.quantity_input}
      />
      <Button variant="light" onClick={() => setValue(value + 1)}>
        <BiPlus />
      </Button>
    </span>
  );
};

export default Quantity;
