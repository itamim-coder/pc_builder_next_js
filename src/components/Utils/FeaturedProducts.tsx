import React from "react";
import { Card } from "antd";
import Link from "next/link";

const { Meta } = Card;

interface KeyFeatures {
  Brand: string;
  Model: string;
  Specification: string;
  Port: string;
  Type: string;
  Voltage: string;
  // Add more properties if needed
}
interface Review {
  id: number;
  author: string;
  rating: number;
  comment: string;
}

interface Product {
  [x: string]: any;
  id: number;
  title: string;
  image: string;
  categoryId: number;
  status: "In Stock" | "Out of Stock";
  price: number;
  description: string;
  keyFeatures: KeyFeatures;
  individualRating: number;
  averageRating: number;
  reviews: Review[];
}

interface FeaturedProductsProps {
  products: Product[];
}
const FeaturedProducts: React.FC<FeaturedProductsProps> = ({ products }) => {
  return (
    <>
      {/* {console.log(products)} */}
      <h3 className="text-3xl font-semibold">Featured Products</h3>
      <div className=""></div>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 p-4">
        {products?.slice(0, 6)?.map((product) => (
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
                <img alt="example" src={product?.image} />
              </div>

              <div className="w-2/3 p-4 md:p-4">
                <h1 className="text-l font-bold text-gray-800 dark:text-white">
                  {product?.title}
                </h1>

                <p className="mt-2 text-m text-gray-600 dark:text-gray-400">
                  {product?.category}
                  <br />
                </p>
                <div className="flex mt-2 item-center">
                  {product?.status === "In Stock" ? (
                    <div className="w-5 h-5 rounded-full bg-green-500 mr-2"></div>
                  ) : (
                    <div className="w-5 h-5 rounded-full bg-red-500 mr-2"></div>
                  )}
                  <p>{product?.status}</p>
                </div>

                <div className="flex mt-2 item-center">
                  {Array.from({
                    length: Math.ceil(product?.averageRating),
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
                    ${product?.price}
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
  );
};

export default FeaturedProducts;
