import React from 'react';
import styles from './BannerGroup.module.scss';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const BannerGroup = () => {
  return (
    <Row className={styles.root_banner}>
      <Col md={12} lg={8} className={styles.left_side}>
        <Row xs={12}>
          <Col md={6} className={styles.banner_wrapper}>
            <Link to="/">
              <div className={styles.left_banner_text}>
                <p className="m-0">New Arrivals</p>
                <h4>
                  Sneakers &<br /> Athletic Shoes
                </h4>
                <Button variant="light">DISCOVER NOW</Button>
              </div>
              <img
                className={'d-block  ' + styles.banner_small}
                src="./images/banner-group/banner-small-1.jpg"
                alt="shoes-banner-1"
              />
            </Link>
          </Col>
          <Col md={6} className={styles.banner_wrapper}>
            <Link to="/">
              <div className={styles.right_banner_text}>
                <p className="m-0">Clearance</p>
                <h4>
                  Heels <br /> up to 70% off
                </h4>

                <Button variant="dark">SHOP NOW</Button>
              </div>
              <img
                className={'d-block  ' + styles.banner_small}
                src="./images/banner-group/banner-small-3.jpg"
                alt="shoes-banner-2"
              />
            </Link>
          </Col>
        </Row>
        <Row className="d-sm-none d-md-none d-lg-block">
          <Col xs={12} className={styles.banner_wrapper}>
            <Link to="/">
              <div className={styles.bottom_banner_text}>
                <p className="m-0">On Sale</p>
                <h4>
                  Athletic Shoes
                  <br /> up to 30% off
                </h4>

                <Button variant="light">SHOP NOW</Button>
              </div>
              <img
                className={'d-block ' + styles.banner_left_long}
                src="./images/banner-group/left-banner-long-3.jpg"
                alt="shoes-banner-2"
              />
            </Link>
          </Col>
        </Row>
      </Col>
      <Col md={12} lg={4} className={styles.banner_right_wrapper}>
        <Link to="/">
          <div className={styles.right_banner_text}>
            <p className="m-0">On Sale</p>
            <h4>
              Amazing
              <br /> Lace Up Boots
              <br /> from $39
            </h4>

            <Button variant="light">DISCOVER NOW</Button>
          </div>
          <img
            className={'d-block ' + styles.banner_right}
            src="./images/banner-group/right-banner-long-3.jpg"
            alt="shoes-banner-2"
          />
        </Link>
      </Col>
    </Row>
  );
};

export default BannerGroup;
