import RootLayout from "@/components/Layouts/RootLayout";
import React from "react";

const ProductsPage = () => {
  return (
    <div>
      <h1>this is a product page</h1>
    </div>
  );
};

export default ProductsPage;

ProductsPage.getLayout = function getLayout(page: React.ReactNode) {
  return <RootLayout>{page}</RootLayout>;
};
