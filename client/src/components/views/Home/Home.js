import React from 'react';
import BannerGroup from '../../features/BannerGroup/BannerGroup';
import HomeCarousel from '../../features/HomeCarousel/HomeCarousel';
import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import FeaturedProducts from '../../features/FeaturedProducts/FeaturedProducts';
import Container from 'react-bootstrap/Container';

const Home = () => {
  return (
    <div>
      <Container>
        <HomeCarousel />
        <BannerGroup />
        <FeatureBoxes />
      </Container>
      <FeaturedProducts />
    </div>
  );
};

export default Home;
