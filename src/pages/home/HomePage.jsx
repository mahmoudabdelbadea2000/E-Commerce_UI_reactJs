import React from 'react';
import BlogSection from "../../components/blog/BlogSection.jsx";
import { HomeCategory, HomeOfferies } from '../../components/home';
import HomeBanners from "../../components/home/homeBanners/HomeBanners";
import ProductSection from '../../components/products/ProductSection.jsx';


const HomePage = () => {
  return (
    <>
      <HomeBanners />
      <HomeCategory />
      <HomeOfferies />
      <ProductSection />
      <BlogSection />
    </>
  )
}

export default HomePage