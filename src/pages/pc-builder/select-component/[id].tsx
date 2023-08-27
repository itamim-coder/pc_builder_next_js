import RootLayout from "@/components/Layouts/RootLayout";
import React from "react";
import { Card } from "antd";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addComponent } from "@/redux/Features/pc_builder/pc_builderslice";
import { useRouter } from "next/router";

const { Meta } = Card;

const SelectComponent = ({ components }) => {
  console.log(components);
  const router = useRouter();
  const dispatch = useDispatch();

  const handleAddComponent = (component) => {
    dispatch(addComponent({ category: component.category, component }));
    router.push("/pc-builder");
  };
  return (
    <>
      <div className="h-screen">
        <div className="lg:mx-10 mx-5 ">
          {components?.map((component) => (
            <>
              <div>
                <Card type="inner" className="m-5">
                  <div className="flex justify-between ">
                    <div className="flex ">
                      <div>
                        <img src={component?.image}></img>
                      </div>
                      <div>{component.title}</div>
                    </div>
                    {/* <Link href={`/pc-builder/select-component/${component?.id}`}> */}
                    <button onClick={() => handleAddComponent(component)}>
                      ADD
                    </button>
                    {/* </Link> */}
                  </div>
                </Card>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default SelectComponent;

SelectComponent.getLayout = function getLayout(page: React.ReactNode) {
  return <RootLayout>{page}</RootLayout>;
};

export async function getServerSideProps({ params }) {
  console.log(params);
  // Fetch data from external API
  const res = await fetch(`http://localhost:8000/filterproducts/${params.id}`);
  const data = await res.json();
  console.log(data);
  // // Pass data to the page via props
  return { props: { components: data } };
}
