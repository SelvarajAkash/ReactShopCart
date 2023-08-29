import React from "react";
import BlogHeroSection from "../blogComponents/BlogHeroSection";
import BlogImages from '../blogComponents/BlogImages';
import Pagination from '../components/Pagination';

function Blog() {
  return (
    <>
      <BlogHeroSection />
      <BlogImages />
      <Pagination />
    </>
  );
}

export default Blog;
