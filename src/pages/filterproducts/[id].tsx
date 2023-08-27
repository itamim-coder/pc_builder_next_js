import RootLayout from "@/components/Layouts/RootLayout";
import React from "react";
import { Card } from "antd";
import Link from "next/link";
const { Meta } = Card;
const FilterProducts = ({product}) => {
  console.log(product)


  return  <>
  {/* {console.log(products)} */}
  <div className="lg:h-screen grid gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 p-4">
    {product?.map((dt) => (
      <Link href={`/products/${dt?._id}`}>
        <Card
          hoverable
          style={{ width: 240 }}
          cover={
            <img
              alt="example"
              src={dt?.image}
            />
          }
        >
          <Meta title={dt?.title} description="www.instagram.com" />
        </Card>
      </Link>
    ))}
  </div>
</>
};


export default FilterProducts;
FilterProducts.getLayout = function getLayout(page: React.ReactNode) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:8000/products");
  const products = await res.json();

  const paths = products?.map((product: { categoryId: any; }) => ({
    params: { id: (product.categoryId) },
  }));
  console.log(paths);
  return { paths, fallback: false };
};

export async function getStaticProps({ params }) {
  // params contains the post `id`.

  // If the route is like /posts/1, then params.id is 1
  const res = await fetch(`http://localhost:8000/filterproducts/${params.id}`);
  const product = await res.json();
   console.log(product)
  // Pass post data to the page via props
  return { props: { product } };
}
