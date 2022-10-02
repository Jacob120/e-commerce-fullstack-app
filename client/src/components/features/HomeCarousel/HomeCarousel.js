import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import styles from './HomeCarousel.module.scss';
import Button from 'react-bootstrap/Button';

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
          <div className={styles.carousel_content}>
            <h3 className={'mb-0 ' + styles.slide_title}>
              Sneakers & Athletic Shoes
            </h3>
            <div className="d-flex justify-content-center align-items-center ">
              <p className={'px-3 m-0 ' + styles.slide_subtitle}>from $9.99</p>
              <Button variant="light">SHOP NOW</Button>
            </div>
          </div>
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
          <div className={styles.carousel_content}>
            <h3 className={styles.slide_title}>This Week's Most Wanted</h3>
            <div className="d-flex justify-content-center align-items-center ">
              <p className={'px-3 m-0 ' + styles.slide_subtitle}>from $49.99</p>
              <Button variant="light">DISCOVER NOW</Button>
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className={styles.slide}>
        <img
          className={'d-block w-100 ' + styles.slide_image}
          src="./images/carousel/carousel-slide-3.jpg"
          alt="Third slide"
          height={'500px'}
        />

        <Carousel.Caption>
          <div className={styles.carousel_content}>
            <h3 className={styles.slide_title}>Can't miss Nike!</h3>
            <div className="d-flex justify-content-center align-items-center ">
              <p className={'px-3 m-0 ' + styles.slide_subtitle}>
                starting at 60% off
              </p>
              <Button variant="light">DISCOVER NOW</Button>
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default HomeCarousel;
