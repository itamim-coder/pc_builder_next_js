import RootLayout from "@/components/Layouts/RootLayout";
import React from "react";

const PcBuilderPage = () => {
  return (
    <div>
      <h1>This is Pc Builder page</h1>
    </div>
  );
};

export default PcBuilderPage;

PcBuilderPage.getLayout = function getLayout(page: React.ReactNode) {
  return <RootLayout>{page}</RootLayout>;
};
