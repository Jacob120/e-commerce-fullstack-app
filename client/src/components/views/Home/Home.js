import React, { useEffect } from 'react';
import BannerGroup from '../../features/BannerGroup/BannerGroup';
import HomeCarousel from '../../features/HomeCarousel/HomeCarousel';
import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import FeaturedProducts from '../../features/FeaturedProducts/FeaturedProducts';
import Container from 'react-bootstrap/Container';
// import { useDispatch, useSelector } from 'react-redux';
// import { selectCurrentToken, setCredentials } from '../../../redux/authSlice';
const Home = () => {
  // const dispatch = useDispatch();

  // const username = sessionStorage.getItem('username');
  // const accessToken = sessionStorage.getItem('accessToken');

  // useEffect(() => {
  //   dispatch(setCredentials({ username, accessToken }));
  // }, [username, accessToken, dispatch]);

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
