import RootLayout from "@/components/Layouts/RootLayout";
import { Link } from "react-scroll";
import React, { useState } from "react";

const ProductDetails = ({ product }) => {
  const [activeSection, setActiveSection] = useState("description");

  const handleSectionChange = (sectionId) => {
    setActiveSection(sectionId);
  };
  console.log(product);
  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
              <h2 className="text-sm title-font text-black-500 tracking-widest">
                {product?.keyFeatures?.Brand}
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">
                {product?.title}
              </h1>
              <div className="flex mb-4">
                <Link
                  to="description"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className={`flex-grow ${
                    activeSection === "description"
                      ? "text-indigo-500 border-b-2 border-indigo-500"
                      : "border-b-2 border-gray-300"
                  } py-2 text-lg px-1`}
                  onClick={() => handleSectionChange("description")}
                >
                  Description
                </Link>
                <Link
                  to="reviews"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className={`flex-grow ${
                    activeSection === "reviews"
                      ? "text-indigo-500 border-b-2 border-indigo-500"
                      : "border-b-2 border-gray-300"
                  } py-2 text-lg px-1`}
                  onClick={() => handleSectionChange("reviews")}
                >
                  Reviews
                </Link>
                <Link
                  to="details"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className={`flex-grow ${
                    activeSection === "details"
                      ? "text-indigo-500 border-b-2 border-indigo-500"
                      : "border-b-2 border-gray-300"
                  } py-2 text-lg px-1`}
                  onClick={() => handleSectionChange("details")}
                >
                  Details
                </Link>
              </div>
              <div
                id="description"
                style={{
                  display: activeSection === "description" ? "block" : "none",
                }}
              >
                {product?.description}
                {/* ... Description content ... */}
                <div className="flex border-t border-gray-200 py-2">
                  <span className="text-gray-500">Average Ratings</span>
                  <span className="ml-auto flex text-gray-900">
                    {" "}
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
                  </span>
                </div>
                <div className="flex border-t border-gray-200 py-2">
                  <span className="text-gray-500">Category</span>
                  <span className="ml-auto text-gray-900">
                    {product?.category}
                  </span>
                </div>
                <div className="flex border-t border-b mb-6 border-gray-200 py-2">
                  <span className="text-gray-500">Status</span>
                  <span className="ml-auto flex text-gray-900">
                    {product?.status === "In Stock" ? (
                      <div className="w-5 h-5 rounded-full bg-green-500 mr-2"></div>
                    ) : (
                      <div className="w-5 h-5 rounded-full bg-red-500 mr-2"></div>
                    )}
                    <p>{product?.status}</p>
                  </span>
                </div>
              </div>
              <div
                id="reviews"
                style={{
                  display: activeSection === "reviews" ? "block" : "none",
                }}
              >
                {product?.reviews.map((review) => (
                  <div>
                    <div className="flex justify-between">
                      <span className="text-black"> {review.author}</span>
                      <span className="ml-auto flex text-gray-900">
                        {" "}
                        {Array.from({
                          length: Math.ceil(review?.rating),
                        }).map((_, index) => (
                          <svg
                            key={index}
                            className="w-5 h-5 text-gray-700 fill-current dark:text-gray-300"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                          </svg>
                        ))}
                      </span>
                    </div>
                    <div className="mt-1 mb-3 ">{review.comment}</div>
                  </div>
                ))}
              </div>
              <div
                id="details"
                style={{
                  display: activeSection === "details" ? "block" : "none",
                }}
              >
                <div className="flex border-gray-200 py-2">
                  <span className="text-gray-500">Brand</span>
                  <span className="ml-auto flex text-gray-900">
                    {product.keyFeatures.Brand}
                  </span>
                </div>
                <div className="flex border-t border-gray-200 py-2">
                  <span className="text-gray-500">Model</span>
                  <span className="ml-auto text-gray-900">       {product.keyFeatures.Model}</span>
                </div>
                <div className="flex border-t   border-gray-200 py-2">
                  <span className="text-gray-500">Specification</span>
                  <span className="ml-auto flex text-gray-900">       {product.keyFeatures.Specification}</span>
                </div>
                <div className="flex border-t  border-gray-200 py-2">
                  <span className="text-gray-500">Port</span>
                  <span className="ml-auto flex text-gray-900"> {product.keyFeatures.Port}</span>
                </div>
                <div className="flex border-t  border-gray-200 py-2">
                  <span className="text-gray-500">Type</span>
                  <span className="ml-auto flex text-gray-900">{product.keyFeatures.Type}</span>
                </div>
                <div className="flex border-t border-b mb-6 border-gray-200 py-2">
                  <span className="text-gray-500">Voltage</span>
                  <span className="ml-auto flex text-gray-900">{product.keyFeatures.Voltage}</span>
                </div>
              </div>

              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">
                  ${product?.price}
                </span>
                <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                  Button
                </button>
                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                </button>
              </div>
            </div>
            <img
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src={product?.image}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;

ProductDetails.getLayout = function getLayout(page: React.ReactNode) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch("https://pc-builder-backend-1fi4.onrender.com/products");
  const products = await res.json();

  const paths = products?.map((product: { _id: any }) => ({
    params: { id: product._id },
  }));
  console.log(paths);
  return { paths, fallback: false };
};

export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // console.log(params)
  // If the route is like /posts/1, then params.id is 1
  const res = await fetch(
    `https://pc-builder-backend-1fi4.onrender.com/products/${params.id}`
  );
  const product = await res.json();
  //  console.log(res)
  // Pass post data to the page via props
  return { props: { product } };
}
