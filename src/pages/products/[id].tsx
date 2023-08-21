import RootLayout from "@/components/Layouts/RootLayout";
import React from "react";

const ProductDetails = () => {
  return (
    <div>
      <h1>this is a products details page</h1>
    </div>
  );
};

export default ProductDetails;

ProductDetails.getLayout = function getLayout(page: React.ReactNode) {
  return <RootLayout>{page}</RootLayout>;
};
