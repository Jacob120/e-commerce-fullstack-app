import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BiRocket } from 'react-icons/bi';

const FeatureBoxes = () => {
  return (
    <Row>
      <Col>
        <BiRocket />
        <h5>Free Shipping</h5>
        <p>Orders $50 or more</p>
      </Col>
      <Col>
        <h5>Free Shipping</h5>
        <p>Orders $50 or more</p>
      </Col>
      <Col>
        <h5>Free Shipping</h5>
        <p>Orders $50 or more</p>
      </Col>
      <Col>
        <h5>Free Shipping</h5>
        <p>Orders $50 or more</p>
      </Col>
    </Row>
  );
};

export default FeatureBoxes;
