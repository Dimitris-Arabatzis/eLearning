import React from 'react';
// import sections
import Hero_Contact from '../components/sections/Hero_Contact';
import ContactPage from '../components/sections/ContactPage'
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import SecondOffering from '../components/sections/SecondOffering';
import Testimonial from '../components/sections/Testimonial';
import Cta from '../components/sections/Cta';

const Home = () => {

  return (
    <>
      <Hero_Contact className="illustration-section-01" />
      <ContactPage></ContactPage>
      {/* 
      <SecondOffering/>
      <FeaturesTiles topDivider/>
      <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" /> */}
      {/* <Testimonial topDivider /> */}
    </>
  );
}

export default Home;