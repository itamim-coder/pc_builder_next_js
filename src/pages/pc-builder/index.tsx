import RootLayout from "@/components/Layouts/RootLayout";
import React from "react";
import { Card } from "antd";
import Link from "next/link";

import { useSelector } from "react-redux";

const PcBuilderPage = ({ data }) => {
  const selectedComponents = useSelector(
    (state) => state.pcBuilder.addedComponents
  );
  console.log(selectedComponents);
  return (
    <div className="">
      <div className="lg:mx-10 mx-5">
        {data?.map((dt) => (
          <>
            <div className="mt-5">
              <Card type="inner">
                <div className="">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="">
                      <img className="w-10" src={dt.image} alt="" />
                      <p className=" text-sm">{dt.title}</p>
                    </div>
                    <div className=" grid-cols-2">
                      {selectedComponents &&
                        selectedComponents[dt?.title]?.map((component) => (
                          <div>
                            <img
                              className="w-10"
                              src={component.image}
                              alt=""
                            />
                            <p className=" text-sm">{component.title}</p>
                          </div>
                        ))}
                    </div>
                    <div className="flex justify-end">
                      {!selectedComponents[dt.title] ? (
                        <Link href={`/pc-builder/select-component/${dt.id}`}>
                          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                            Choose
                          </button>
                        </Link>
                      ) : (
                        <div>Component Selected</div>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </>
        ))}
      </div>

      {Object.keys(selectedComponents).length >= 5 ? (
        <div className="flex justify-center m-5">
          <button className=" w-80 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Build PC
          </button>
        </div>
      ) : (
        <div className="flex justify-center m-5">
          <button className=" w-80 bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed">
            Build PC
          </button>
        </div>
      )}
    </div>
  );
};

export default PcBuilderPage;

PcBuilderPage.getLayout = function getLayout(page: React.ReactNode) {
  return <RootLayout>{page}</RootLayout>;
};

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://pc-builder-backend-1fi4.onrender.com/categories`);
  const categories = await res.json();

  // Pass data to the page via props
  return { props: { data: categories } };
}
