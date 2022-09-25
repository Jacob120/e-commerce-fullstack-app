import React from 'react';
import BannerGroup from '../../features/BannerGroup/BannerGroup';
import HomeCarousel from '../../features/HomeCarousel/HomeCarousel';
import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';

import NavBar from '../../layout/NavBar/NavBar';
import TopBar from '../../layout/TopBar/TopBar';

const Home = () => {
  return (
    <div>
      <TopBar />
      <NavBar />
      <HomeCarousel />
      <BannerGroup />
      <FeatureBoxes />
    </div>
  );
};

export default Home;
