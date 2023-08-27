import RootLayout from "@/components/Layouts/RootLayout";
import React from "react";
import { Card } from "antd";
import Link from "next/link";
const { Meta } = Card;
const FilterProducts = ({ product }) => {
  console.log(product);

  return (
    <>
      {/* {console.log(products)} */}
      <>
        {/* {console.log(products)} */}

        <div className="grid h-screen gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 p-4">
          {product?.slice(0, 6)?.map((dt) => (
            <Link href={`/products/${product?._id}`}>
              {/* <Card
            hoverable
            style={{ width: 240 }}
            cover={
              <img
                alt="example"
                src={product?.image}
              />
            }
          >
            <Meta title={product?.title} description="www.instagram.com" />
          </Card> */}
              <div className="flex max-w-md overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                <div className="w-1/3 bg-cover">
                  <img alt="example" src={dt?.image} />
                </div>

                <div className="w-2/3 p-4 md:p-4">
                  <h1 className="text-l font-bold text-gray-800 dark:text-white">
                    {dt?.title}
                  </h1>

                  <p className="mt-2 text-m text-gray-600 dark:text-gray-400">
                    {dt?.category}
                    <br />
                  </p>
                  <div className="flex mt-2 item-center">
                    {dt?.status === "In Stock" ? (
                      <div className="w-5 h-5 rounded-full bg-green-500 mr-2"></div>
                    ) : (
                      <div className="w-5 h-5 rounded-full bg-red-500 mr-2"></div>
                    )}
                    <p>{dt?.status}</p>
                  </div>

                  <div className="flex mt-2 item-center">
                    {Array.from({
                      length: Math.ceil(dt?.averageRating),
                    }).map((_, index) => (
                      <svg
                        key={index}
                        className="w-5 h-5 text-gray-700 fill-current dark:text-gray-300"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                      </svg>
                    ))}
                  </div>

                  <div className="flex justify-between mt-3 item-center">
                    <h1 className="text-lg font-bold text-gray-700 dark:text-gray-200 md:text-xl">
                      ${dt?.price}
                    </h1>
                    {/* <button className="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600">
                    Add to Cart
                  </button> */}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </>
    </>
  );
};

export default FilterProducts;
FilterProducts.getLayout = function getLayout(page: React.ReactNode) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:8000/products");
  const products = await res.json();

  const paths = products?.map((product: { categoryId: any }) => ({
    params: { id: product.categoryId },
  }));
  console.log(paths);
  return { paths, fallback: false };
};

export async function getStaticProps({ params }) {
  // params contains the post `id`.

  // If the route is like /posts/1, then params.id is 1
  const res = await fetch(`http://localhost:8000/filterproducts/${params.id}`);
  const product = await res.json();
  console.log(product);
  // Pass post data to the page via props
  return { props: { product } };
}
