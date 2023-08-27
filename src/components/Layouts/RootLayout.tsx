import React from "react";
import { Breadcrumb, Layout, Menu, theme, Button } from "antd";
import Link from "next/link";
import DropDown from "../Utils/DropDown";

const { Header, Content, Footer } = Layout;

interface RootLayoutProps {
  children: React.ReactNode;
}
const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout className="layout">
      <Header className="flex justify-between">
        <div className="text-white">
          <Link href="/">PC Store</Link>
        </div>
        <div className="">
          <DropDown></DropDown>
          <Link href="/pc-builder">
            {" "}
            <button className="bg-sky-700 px-5 text-white">PC BUILDER</button>
          </Link>
        </div>
      </Header>
      <Content
        style={{
          //  padding: "0 50px",
          background: colorBgContainer,
        }}
      >
        <div
          className="site-layout-content"
          // style={{ background: colorBgContainer }}
        >
          {children}
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2023 Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default RootLayout;
