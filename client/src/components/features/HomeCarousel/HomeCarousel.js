import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import styles from './HomeCarousel.module.scss';

const HomeCarousel = () => {
  return (
    <Carousel className={styles.carousel}>
      <Carousel.Item className={styles.slide}>
        <img
          className={'d-block w-100 ' + styles.slide_image}
          src="./images/carousel/carousel-slide-1.jpg"
          alt="First slide"
          height={'500px'}
        />
        <Carousel.Caption>
          <h3 className={styles.slide_title}>First slide label</h3>
          <p className={styles.slide_subtitle}>
            Nulla vitae elit libero, a pharetra augue mollis interdum.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className={styles.slide}>
        <img
          className={'d-block w-100 ' + styles.slide_image}
          src="./images/carousel/carousel-slide-2.jpg"
          alt="Second slide"
          height={'500px'}
        />

        <Carousel.Caption>
          <h3 className={styles.slide_title}>Second slide label</h3>
          <p className={styles.slide_subtitle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className={'d-block w-100 ' + styles.slide_image}
          src="./images/carousel/carousel-slide-3.jpg"
          alt="Third slide"
          height={'500px'}
        />

        <Carousel.Caption className={styles.slide}>
          <h3 className={styles.slide_title}>Third slide label</h3>
          <p className={styles.slide_subtitle}>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default HomeCarousel;
