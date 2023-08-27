import RootLayout from "@/components/Layouts/RootLayout";
import CarouselComponent from "@/components/Utils/Carousel";
import CustomSlider from "@/components/Utils/CustomSlider";
import FeaturedCategories from "@/components/Utils/FeaturedCategories";
import FeaturedProducts from "@/components/Utils/FeaturedProducts";
import React from "react";
import ProductsPage from "./products";

interface Category {
  id: number;
  title: string;
  image: string;
  // Add more properties if needed
}

interface HomeProps {
  categories: Category[];
}

const Home: React.FC<HomeProps> = ({ categories, products }) => {
  return (
    <div>
      <CarouselComponent />
      <FeaturedProducts products={products} />
      {/* <ProductsPage products={products}></ProductsPage> */}
      <CustomSlider></CustomSlider>
      <FeaturedCategories categories={categories} />
    </div>
  );
};

export default Home;

Home.getLayout = function getLayout(page: React.ReactNode) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  // const res = await fetch("http://localhost:3000/api/news"); // internal API connected with mongoDB
  const res = await fetch("http://localhost:8000/categories"); // --> json server
  const data = await res.json();

  const res2 = await fetch("http://localhost:8000/products");
  const data2 = await res2.json();

  // Shuffle the data2 array using a random comparison function
  const shuffledData2 = data2.sort(() => 0.5 - Math.random());

  return {
    props: {
      categories: data,
      products: shuffledData2,
    },
    revalidate: 10,
  };
};
