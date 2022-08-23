import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import SecondOffering from '../components/sections/SecondOffering';
import CallToAction from '../components/sections/CallToAction';

const Home = () => {

  return (
    <>
      <Hero className="illustration-section-01" />
      <CallToAction/>
      <SecondOffering />
      <FeaturesTiles topDivider/>
      {/* <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" /> */}
      {/* <Testimonial topDivider /> */}
    </>
  );
}

export default Home;