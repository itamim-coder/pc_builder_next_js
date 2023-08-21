import RootLayout from "@/components/Layouts/RootLayout";
import CarouselComponent from "@/components/Utils/Carousel";
import FeaturedCategories from "@/components/Utils/FeaturedCategories";
import FeaturedProducts from "@/components/Utils/FeaturedProducts";
import React from "react";

const Home = () => {
  return (
    <>
      <div>
        <CarouselComponent></CarouselComponent>
        <FeaturedProducts></FeaturedProducts>
        <FeaturedCategories></FeaturedCategories>
      </div>
    </>
  );
};
export default Home;

Home.getLayout = function getLayout(page: React.ReactNode) {
  return <RootLayout>{page}</RootLayout>;
};
