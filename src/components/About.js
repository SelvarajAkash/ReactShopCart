import React from "react";
import AboutHeroSection from "../aboutComponents/AboutHeroSection";
import AboutImages from "../aboutComponents/AboutImages";
import AboutVideo from "../aboutComponents/AboutVideo";
import FeatureSection from '../homeComponents/FeatureSection';

function About() {
  return (
    <>
      <AboutHeroSection />
      <AboutImages />
      <AboutVideo />
      <FeatureSection />
    </>
  );
}

export default About;
