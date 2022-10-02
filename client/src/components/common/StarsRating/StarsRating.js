import React from 'react';
import styles from './StarsRating.module.scss';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BsStarFill } from 'react-icons/bs';
import PropTypes from 'prop-types';

const StarsRating = ({ stars }) => {
  return (
    <Row className="align-items-center pb-3">
      <Col md="auto" className=" pr-0">
        {[...Array(5)].map((star, index) =>
          index < stars ? (
            <BsStarFill key={index} className={styles.stars_fill} />
          ) : (
            <BsStarFill key={index} className={styles.stars} />
          ),
        )}
      </Col>
      <Col md="auto" className=" pl-0">
        <p className={'mx-1 ' + styles.categories_text}>(2 reviews)</p>
      </Col>
    </Row>
  );
};

StarsRating.propTypes = {
  stars: PropTypes.number,
};

export default StarsRating;
