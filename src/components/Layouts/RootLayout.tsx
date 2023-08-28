import React from "react";
import { Breadcrumb, Layout, Menu, theme, Button } from "antd";
import Link from "next/link";
import DropDown from "../Utils/DropDown";
import Navbar from "../Utils/Navbar";
import { useSession, signOut } from "next-auth/react";
const { Header, Content, Footer } = Layout;

interface RootLayoutProps {
  children: React.ReactNode;
}
const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const { data: session } = useSession();

  console.log("from header", session);
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
        <div>
          {session?.user ? (
            <div>
              <Button onClick={() => signOut()} type="primary" danger>
                Logout
              </Button>
            </div>
          ) : (
            <Link
              style={{ textDecoration: "none", color: "white" }}
              href="/login"
            >
              <div>Login</div>
            </Link>
          )}
        </div>
      </Header>
      {/* <Navbar></Navbar> */}
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
