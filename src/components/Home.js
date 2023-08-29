import React from "react";
import HeroSection from "../homeComponents/HeroSection";
import FeatureSection from "../homeComponents/FeatureSection";
import FeatureProductSection from "../homeComponents/FeatureProductSection";
import BannerSection from "../homeComponents/BannerSection";
import ArrivalSection from "../homeComponents/ArrivalSection";
import SmallBannerSection from "../homeComponents/SmallBannerSection";
import Banner1Section from "../homeComponents/Banner1Section";

function Home() {
  return (
    <>
      <HeroSection />
      <FeatureSection />
      <FeatureProductSection />
      <BannerSection />
      <ArrivalSection />
      <SmallBannerSection />
      <Banner1Section />
    </>
  );
}

export default Home;
