import RootLayout from "@/components/Layouts/RootLayout";
import React from "react";
import { Card } from "antd";
import Link from "next/link";

const PcBuilderPage = () => {
  return (
    <div className="h-screen">
      <div className="lg:mx-10 mx-5">
        <Card type="inner">Inner Card content</Card>
      </div>
    </div>
  );
};

export default PcBuilderPage;

PcBuilderPage.getLayout = function getLayout(page: React.ReactNode) {
  return <RootLayout>{page}</RootLayout>;
};
