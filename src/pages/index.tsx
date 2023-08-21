import RootLayout from "@/components/Layouts/RootLayout";
import CarouselComponent from "@/components/Utils/Carousel";
import React from "react";

const Home = () => {
  return (
    <div>
      <CarouselComponent></CarouselComponent>
    </div>
  );
};
export default Home;

Home.getLayout = function getLayout(page: React.ReactNode) {
  return <RootLayout>{page}</RootLayout>;
};
