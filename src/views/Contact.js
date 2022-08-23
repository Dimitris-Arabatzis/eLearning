import React from 'react';
// import sections
import HeroContact from '../components/sections/Hero_Contact';
import ContactPage from '../components/sections/ContactPage'

const Home = () => {

  return (
    <>
      <HeroContact className="illustration-section-01" />
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