import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
// import SecondOffering from '../components/sections/SecondOffering';
import CallToAction from '../components/sections/CallToAction';
import HowTo from '../components/sections/HowTo';

const Home = () => {

  return (
    <>
      <Hero className="illustration-section-01" />
      <CallToAction/>
      {/* <SecondOffering /> */}
      <HowTo invertMobile imageFill className="illustration-section-02" />
      {/* <FeaturesTiles topDivider/> */}
      {/* <Testimonial topDivider /> */}
    </>
  );
}

export default Home;