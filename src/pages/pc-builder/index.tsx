import RootLayout from "@/components/Layouts/RootLayout";
import React from "react";
import { Card } from "antd";
import Link from "next/link";
import { useGetCategoriesQuery } from "@/redux/Features/categories/categoriesApi";
import { useDispatch, useSelector } from "react-redux";
import { selectCategory } from "@/redux/Features/categories/categoriesSlice";

const PcBuilderPage = ({ data }) => {
  // const handleAddCategory = (data) => {
  //   dispatch(selectCategory(data));
  // };
  // const { data, isLoading, isError, error } = useGetCategoriesQuery(undefined);
  const selectedComponents = useSelector(
    (state) => state.pcBuilder.addedComponents
  );
  console.log(selectedComponents);
  return (
    <div className="h-screen">
      <div className="lg:mx-10 mx-5">
        {data?.map((dt) => (
          <>
            <div>
              <Card type="inner">
                <div className="flex justify-between">
                  {dt.title}
                  <div className="flex flex-wrap">
                    {selectedComponents &&
                      selectedComponents[dt?.title]?.map((component) => (
                        <Card
                          key={component.id}
                          title={component.title}
                          extra={`$${component.price}`}
                          style={{ width: 300, margin: "16px" }}
                        >
                          {/* <img src={component.image} alt={component.title} /> */}
                          {/* Add more information as needed */}
                        </Card>
                      ))}
                  </div>
                  {!selectedComponents[dt.title] ? (
                    <Link href={`/pc-builder/select-component/${dt.id}`}>
                      <button>Choose</button>
                    </Link>
                  ) : (
                    <div>Component Selected</div>
                  )}
                </div>
              </Card>
            </div>
          </>
        ))}
      </div>
      {Object.keys(selectedComponents).length >= 5 ? (
        <button>Build PC</button>
      ) : (
        <button disabled>Build PC</button>
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
  const res = await fetch(`http://localhost:8000/categories`);
  const categories = await res.json();

  // Pass data to the page via props
  return { props: { data: categories } };
}
