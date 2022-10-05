import React, { useState } from 'react';
import styles from './ProductPage.module.scss';
import StarsRating from '../../common/StarsRating/StarsRating';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../../redux/productsRedux';

import {
  BsCartPlus,
  BsFacebook,
  BsTwitter,
  BsInstagram,
  BsPinterest,
} from 'react-icons/bs';
import Quantity from '../../common/Quantity/Quantity';
import { getCartItems } from '../../../redux/cartRedux';
import { addToCart } from '../../../redux/cartSlice';

const ProductPage = () => {
  const dispatch = useDispatch();
  const { productId } = useParams();

  const productData = useSelector((state) => getProductById(state, productId));
  const cart = useSelector((state) => getCartItems(state));
  console.log(cart);
  const [activePhoto, setActivePhoto] = useState(productData.image);
  const [value, setValue] = useState(1);
  const [activeSize, setActiveSize] = useState(productData.size[0]);

  const changeValue = (value) => {
    setValue(value);
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
    dispatch(addToCart({ ...productData, quantity: value, size: activeSize }));
  };

  return (
    <Container>
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item active>Product</Breadcrumb.Item>
      </Breadcrumb>
      <Row className={'pb-3 ' + styles.root}>
        <Col xs={4} md={4} lg={2} className="flex-column">
          {productData.gallery &&
            productData.gallery.map((item) => (
              <div className={styles.gallery} key={item}>
                <button
                  className={
                    item === activePhoto
                      ? styles.gallery_active
                      : styles.gallery_button
                  }
                  onClick={() => setActivePhoto(item)}
                >
                  <img
                    src={item}
                    className={styles.gallery_thumbnail}
                    alt="shoes"
                  />
                </button>
              </div>
            ))}
        </Col>
        <Col xs={8} md={8} lg={4}>
          <img
            src={activePhoto}
            alt="boots"
            className={'d-block ' + styles.left_image}
          />
        </Col>
        <Col xs={12} md={12} lg={6} className={styles.right_details}>
          <h2>{productData.name}</h2>
          <StarsRating stars={productData.starsRating} />
          <h4>
            {productData.oldPrice ? (
              <span>
                <span className={styles.new_price}>
                  Now ${productData.price}
                </span>{' '}
                <span className={styles.old_price}>
                  Was ${productData.oldPrice}
                </span>
              </span>
            ) : (
              <span className={styles.new_price}>${productData.price}</span>
            )}
          </h4>
          <p className={styles.product_description}>
            Morbi purus libero, faucibus adipiscing, commodo quis, gravida id,
            est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper
            lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi
            neque euismod dui, eu pulvinar nunc sapien
          </p>
          <div className="d-flex align-items-center mb-3">
            <p className="mb-0 px-3">Quantity: </p>
            <Quantity onClick={changeValue} />
          </div>
          <div className="d-flex mb-3">
            {productData.size.map((size) => (
              <div className={styles.size_buttons}>
                <button
                  key={size}
                  className={
                    size === activeSize
                      ? styles.size_active
                      : styles.size_inactive
                  }
                  onClick={() => setActiveSize(size)}
                >
                  {size}
                </button>
              </div>
            ))}
          </div>
          <Button
            variant="outline-secondary"
            size="md"
            className="d-flex align-items-center mx-1"
            onClick={handleAddToCart}
          >
            <BsCartPlus className="mx-1 " />
            ADD TO CART
          </Button>
          <div className={'mt-3 ' + styles.details_footer}>
            <p className="mt-3">
              Category: {productData.category}, {productData.type}{' '}
            </p>
            <div className="d-flex align-items-center text-center">
              <p className="m-0">Share: </p>
              <div className={'mx-1 ' + styles.social_icons}>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="mx-1"
                >
                  <BsFacebook />
                </a>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  className="mx-1"
                >
                  <BsTwitter />
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="mx-1"
                >
                  <BsInstagram />
                </a>
                <a
                  href="https://www.pinterest.com"
                  target="_blank"
                  rel="noreferrer"
                  className="mx-1"
                >
                  <BsPinterest />
                </a>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductPage;
