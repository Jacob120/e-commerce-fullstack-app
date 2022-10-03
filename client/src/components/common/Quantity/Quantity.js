import React, { useEffect, useState } from 'react';
import styles from './Quantity.module.scss';
import Button from 'react-bootstrap/Button';
import { BiPlus, BiMinus } from 'react-icons/bi';

const Quantity = (props) => {
  const [value, setValue] = useState(1);

  useEffect(() => {
    props.onClick(value);
  }, [value]);

  return (
    <div className={'d-flex m-3 ' + styles.root}>
      <Button
        variant="light"
        onClick={() => (value > 1 ? setValue(value - 1) : setValue(1))}
      >
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
    </div>
  );
};

export default Quantity;
