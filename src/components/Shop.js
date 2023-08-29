import React from "react";
import ShopHeroSection from "../shopComponents/ShopHeroSection";
import ShopFeatureProductSection from "../shopComponents/ShopFeatureProductSection";
import Pagination from '../components/Pagination';

function Shop() {
  return (
    <>
      <ShopHeroSection />
      <ShopFeatureProductSection />
      <Pagination />
    </>
  );
}

export default Shop;
