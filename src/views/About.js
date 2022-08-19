import React from 'react';
// import sections
import Hero from '../components/sections/Hero_About';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import SecondOffering from '../components/sections/SecondOffering';
import Testimonial from '../components/sections/Testimonial';
import Cta from '../components/sections/Cta';

const About = () => {

  return (
    <>
      <Hero className="illustration-section-01" />
      {/* <Cta split />
      <SecondOffering/>
      <FeaturesTiles topDivider/>
      <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" /> */}
      {/* <Testimonial topDivider /> */}
    </>
  );
}

export default About;