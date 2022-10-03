import React, { useState } from 'react';
import styles from './Quantity.module.scss';
import Button from 'react-bootstrap/Button';
import { BiPlus, BiMinus } from 'react-icons/bi';

const Quantity = () => {
  const [value, setValue] = useState(2);
  return (
    <div className={'d-flex m-3 ' + styles.root}>
      <Button variant="light">
        <BiMinus />
      </Button>
      <input
        type="text"
        value={value}
        className={'text-center ' + styles.quantity_input}
      />
      <Button variant="light">
        <BiPlus />
      </Button>
    </div>
  );
};

export default Quantity;
