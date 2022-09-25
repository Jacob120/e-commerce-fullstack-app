import React from 'react';
import styles from './FeatureBoxes.module.scss';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BiRocket, BiRotateLeft } from 'react-icons/bi';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { MdSupportAgent } from 'react-icons/md';

const FeatureBoxes = () => {
  return (
    <Row className={'justify-content-between ' + styles.feature_root}>
      <Col xs={6} lg={3} className="d-flex">
        <BiRocket size={50} className="mx-3" />
        <div>
          <h5>Free Shipping</h5>
          <p>Orders $50 or more</p>
        </div>
      </Col>
      <Col xs={6} lg={3} className="d-flex">
        <BiRotateLeft size={50} className="mx-3" />
        <div>
          <h5>Free Returns</h5>
          <p>Within 30 days</p>
        </div>
      </Col>
      <Col xs={6} lg={3} className="d-flex">
        <AiOutlineInfoCircle size={50} className="mx-3" />
        <div>
          <h5>Get 20% off 1 item</h5>
          <p>When you sign up</p>
        </div>
      </Col>
      <Col xs={6} lg={3} className="d-flex">
        <MdSupportAgent size={50} className="mx-3" />
        <div>
          <h5>We Support</h5>
          <p>24/7 amazing services</p>
        </div>
      </Col>
    </Row>
  );
};

export default FeatureBoxes;
