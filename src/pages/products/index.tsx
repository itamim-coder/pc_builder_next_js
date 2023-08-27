import RootLayout from "@/components/Layouts/RootLayout";
import React from "react";

import FeaturedProducts from "@/components/Utils/FeaturedProducts";

const ProductsPage = ({ products }) => {
  console.log(products)
  return (
    <div>
      {/* <h1>this is a product page</h1> */}
      <FeaturedProducts products={products} />
    </div>
  );
};

export default ProductsPage;

ProductsPage.getLayout = function getLayout(page: React.ReactNode) {
  return <RootLayout>{page}</RootLayout>;
};

