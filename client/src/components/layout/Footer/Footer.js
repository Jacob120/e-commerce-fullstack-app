import React from 'react';
import styles from './Footer.module.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BsTwitter, BsInstagram, BsPinterest } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className={'pt-5 ' + styles.root}>
      <Container>
        <Row>
          <Col xs={12} md={4} className="mb-3">
            <div>
              <h5 className="pb-3">1-2-SHOE</h5>
              <p>
                Praesent dapibus, neque id cursus ucibus, tortor neque egestas
                augue, eu vulputate magna eros eu erat.
              </p>
              <div
                className={
                  'd-flex align-items-center mx-1 ' + styles.social_icons
                }
              >
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="d-flex mx-1 align-items-center justify-content-center"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  className="d-flex mx-1 align-items-center justify-content-center"
                >
                  <BsTwitter />
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="d-flex mx-1 align-items-center justify-content-center"
                >
                  <BsInstagram />
                </a>
                <a
                  href="https://www.pinterest.com"
                  target="_blank"
                  rel="noreferrer"
                  className="d-flex mx-1 align-items-center justify-content-center"
                >
                  <BsPinterest />
                </a>
              </div>
            </div>
          </Col>
          <Col xs={12} md={4} className="mb-3">
            <div>
              <h5 className="pb-3">Useful Links</h5>
              <p>About media</p>
              <p>How to shop on 1-2-SHOE</p>
              <p>FAQ</p>
              <p>Contact us</p>
              <p>Log in</p>
            </div>
          </Col>
          <Col xs={12} md={4} className="mb-3">
            <div>
              <h5 className="pb-3">Customer Service</h5>
              <p>Payment methods</p>
              <p>Money-back guarantee!</p>
              <p>Returns</p>
              <p>Shipping</p>
              <p>Terms and conditions</p>
            </div>
          </Col>
        </Row>
        <Row className={'py-3 ' + styles.copyright}>
          <Col>
            <p>Copyright &copy; 2022 "1-2-SHOE" Store. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
