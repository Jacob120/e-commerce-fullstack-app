import React from 'react';
import styles from './FeaturedProducts.module.scss';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const FeaturedProducts = () => {
  return (
    <div className={styles.products_root}>
      <Container>
        <Row className="justify-content-center text-center">
          <h2>New Arrivals</h2>
          <Tabs
            defaultActiveKey="all"
            id="tab"
            className={'mb-3 justify-content-center text-center ' + styles.tab}
            variant="pills"
            bg="light"
          >
            <Tab eventKey="all" title="ALL" className={styles.tab}></Tab>
            <Tab eventKey="women" title="WOMEN'S"></Tab>
            <Tab eventKey="men" title="MEN'S"></Tab>
          </Tabs>
        </Row>
      </Container>
    </div>
  );
};

export default FeaturedProducts;
