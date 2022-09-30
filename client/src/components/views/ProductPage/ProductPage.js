import React from 'react';
import styles from './ProductPage.module.scss';
import StarsRating from '../../common/StarsRating/StarsRating';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getProductById } from '../../../redux/productsRedux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import { BsCartPlus } from 'react-icons/bs';

const ProductPage = () => {
  const { productId } = useParams();

  const productData = useSelector((state) => getProductById(state, productId));

  console.log(productData);
  return (
    <Container>
      <Row className={styles.root}>
        <Col>
          <img
            src={productData.image}
            alt="boots"
            className={'d-block ' + styles.left_image}
          />
        </Col>
        <Col className={styles.right_details}>
          <h2>{productData.name}</h2>
          <StarsRating stars={productData.starsRating} />
          <h4>
            {productData.oldPrice ? (
              <span>
                <span className={styles.new_price}>
                  Now {productData.price}
                </span>{' '}
                <span className={styles.old_price}>
                  Was {productData.oldPrice}
                </span>
              </span>
            ) : (
              <span>{productData.price}</span>
            )}
          </h4>
          <p className={styles.product_description}>
            Morbi purus libero, faucibus adipiscing, commodo quis, gravida id,
            est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper
            lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi
            neque euismod dui, eu pulvinar nunc sapien
          </p>
          <div>
            <p> Quantity:</p>
          </div>
          <Button variant="outline-secondary" size="lg">
            <BsCartPlus className="mx-1" />
            ADD TO CART
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductPage;
