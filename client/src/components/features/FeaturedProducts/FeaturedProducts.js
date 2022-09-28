import React from 'react';
import styles from './FeaturedProducts.module.scss';
import ProductBox from '../../common/ProductBox';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../../../redux/productsRedux';

const FeaturedProducts = () => {
  const products = useSelector(getAllProducts);
  console.log(products);
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
            <Tab eventKey="all" title="ALL" tabClassName={styles.tab}>
              <Row xs={1} md={4} className="g-3 ">
                {products.map((product) => (
                  <Col key={product.id}>
                    <ProductBox {...product} />
                  </Col>
                ))}
              </Row>
            </Tab>
            <Tab eventKey="women" title="WOMEN'S"></Tab>
            <Tab eventKey="men" title="MEN'S"></Tab>
          </Tabs>
        </Row>
      </Container>
    </div>
  );
};

export default FeaturedProducts;
