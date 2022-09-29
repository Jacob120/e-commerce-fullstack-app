import React from 'react';
import styles from './FeaturedProducts.module.scss';
import ProductBox from '../../common/ProductBox';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllProducts,
  getMenProducts,
  getWomenProducts,
} from '../../../redux/productsRedux';

const FeaturedProducts = () => {
  const allProducts = useSelector(getAllProducts);
  const menProducts = useSelector(getMenProducts);
  const womenProducts = useSelector(getWomenProducts);
  console.log(menProducts);
  return (
    <div className={styles.products_root}>
      <Container>
        <Row className="justify-content-center text-center">
          <h2>New Arrivals</h2>
          <Tabs
            defaultActiveKey="all"
            id="tab"
            className={'mb-3 justify-content-center text-center'}
            variant="tabs"
            bg="light"
          >
            <Tab eventKey="all" title="ALL">
              <Row className="g-3 ">
                {allProducts.map((product) => (
                  <Col xs={12} md={6} lg={3} key={product.id}>
                    <ProductBox {...product} />
                  </Col>
                ))}
              </Row>
            </Tab>
            <Tab eventKey="women" title="WOMEN'S">
              <Row xs={1} md={2} lg={4} className="g-3 ">
                {womenProducts.map((product) => (
                  <Col key={product.id}>
                    <ProductBox {...product} />
                  </Col>
                ))}
              </Row>
            </Tab>
            <Tab eventKey="men" title="MEN'S">
              <Row xs={1} md={2} lg={4} className="g-3 ">
                {menProducts.map((product) => (
                  <Col key={product.id}>
                    <ProductBox {...product} />
                  </Col>
                ))}
              </Row>
            </Tab>
          </Tabs>
        </Row>
      </Container>
    </div>
  );
};

export default FeaturedProducts;
