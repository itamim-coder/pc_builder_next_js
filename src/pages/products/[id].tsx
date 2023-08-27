import RootLayout from "@/components/Layouts/RootLayout";
import { Link } from "react-scroll";
import React from "react";

const ProductDetails = ({ product }) => {
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
                <a
                  href="description"
                  className="flex-grow text-indigo-500 border-b-2 border-indigo-500 py-2 text-lg px-1"
                >
                  Description
                </a>
                <a
                  href="reviews"
                  className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1"
                >
                  Reviews
                </a>
                <a
                  href="details"
                  className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1"
                >
                  Details
                </a>
              </div>
              <div id="description">
                <p className="leading-relaxed mb-4">
                  Fam locavore kickstarter distillery. Mixtape chillwave tumeric
                  sriracha taximy chia microdosing tilde DIY. XOXO fam inxigo
                  juiceramps cornhole raw denim forage brooklyn. Everyday carry
                  +1 seitan poutine tumeric. Gastropub blue bottle austin
                  listicle pour-over, neutra jean.
                </p>
              </div>
              <div id='reviews'>
                Review
              </div>
              <div id="details">
                Details
              </div>
              <div className="flex border-t border-gray-200 py-2">
                <span className="text-gray-500">Color</span>
                <span className="ml-auto text-gray-900">Blue</span>
              </div>
              <div className="flex border-t border-gray-200 py-2">
                <span className="text-gray-500">Size</span>
                <span className="ml-auto text-gray-900">Medium</span>
              </div>
              <div className="flex border-t border-b mb-6 border-gray-200 py-2">
                <span className="text-gray-500">Quantity</span>
                <span className="ml-auto text-gray-900">4</span>
              </div>
              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">
                  $58.00
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
  const res = await fetch("http://localhost:8000/products");
  const products = await res.json();

  const paths = products?.map((product: { _id: any; }) => ({
    params: { id: product._id },
  }));
  console.log(paths);
  return { paths, fallback: false };
};

export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // console.log(params)
  // If the route is like /posts/1, then params.id is 1
  const res = await fetch(`http://localhost:8000/products/${params.id}`);
  const product = await res.json();
  //  console.log(res)
  // Pass post data to the page via props
  return { props: { product } };
}
