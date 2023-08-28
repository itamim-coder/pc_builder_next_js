import RootLayout from "@/components/Layouts/RootLayout";
import CarouselComponent from "@/components/Utils/Carousel";

import FeaturedCategories from "@/components/Utils/FeaturedCategories";
import FeaturedProducts from "@/components/Utils/FeaturedProducts";
import React from "react";

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
      <div className="m-5">
        <FeaturedProducts products={products} />

        <FeaturedCategories categories={categories} />
      </div>
    </div>
  );
};

export default Home;

Home.getLayout = function getLayout(page: React.ReactNode) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch("https://pc-builder-backend-1fi4.onrender.com/categories"); // --> json server
  const data = await res.json();

  const res2 = await fetch("https://pc-builder-backend-1fi4.onrender.com/products");
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
