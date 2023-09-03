// import { Breadcrumb, Layout, Menu, theme, Button } from "antd";
import Link from "next/link";
import DropDown from "../Utils/DropDown";
import Navbar from "../Utils/Navbar";
import { useSession, signOut } from "next-auth/react";
const { Header, Content, Footer } = Layout;
import React, { useState } from "react";
import {
  Layout,
  Menu,
  Button,
  theme,
  Drawer,
  Row,
  Col,
  Breadcrumb,
} from "antd";
import {
  HomeOutlined,
  UserOutlined,
  SettingOutlined,
  MenuOutlined,
} from "@ant-design/icons";

interface RootLayoutProps {
  children: React.ReactNode;
}
const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const { data: session } = useSession();
  const [visible, setVisible] = useState(false);
  console.log(session);
  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  console.log("from header", session);
  return (
    <Layout className="layout">
      {/* <Header className="flex justify-between">
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
              <Button
                onClick={() =>
                  signOut({
                    callbackUrl: "http://localhost:3000/",
                  })
                }
                type="primary"
                danger
              >
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
      </Header> */}
      <Header style={{ padding: 0 }}>
        <Row justify="space-between" align="middle">
          <Col xs={20} sm={20} md={4}>
            <div
              className="logo"
              style={{ color: "white", paddingLeft: "20px" }}
            >
              <Link href={"/"}>PC Shop</Link>
            </div>
          </Col>
          <Col xs={0} sm={0} md={20}>
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={["1"]}
              style={{ float: "right" }}
            >
              <DropDown></DropDown>
              <Menu.Item></Menu.Item>
              <Menu.Item key="2" >
                <Link href={"/pc-builder"}>PC Builder</Link>
              </Menu.Item>
              {!session?.user?.email && (
                <>
                  <Menu.Item key="4">
                    <Button type="primary" style={{ marginRight: "10px" }}>
                      <Link href={"/login"}>Sign in</Link>
                    </Button>
                  </Menu.Item>
                </>
              )}
              {session?.user?.email && (
                <>
                  <Menu.Item key="4">
                    <Button
                      onClick={() => signOut()}
                      type="primary"
                      style={{ marginRight: "10px" }}
                    >
                      Log Out
                    </Button>
                  </Menu.Item>
                </>
              )}
            </Menu>
          </Col>

          <Col xs={2} sm={2} md={0}>
            <Button type="primary" onClick={showDrawer}>
              <MenuOutlined />
            </Button>
          </Col>
        </Row>
        <Drawer
          title="Menu"
          placement="right"
          onClick={onClose}
          onClose={onClose}
          visible={visible}
        >
          <Menu mode="vertical" defaultSelectedKeys={["1"]}>
          
            <Menu.Item key="2">
              <Link href={"/pc-builder"}>PC Builder</Link>
            </Menu.Item>
        
            <Menu.Item key="4">
              {!session?.user?.email && (
                <>
                  <Link href={"/login"}>
                    <Button
                      // color="black"
                      
                      // type="primary"
                      style={{ marginRight: "10px" }}
                    >
                      Sign in
                    </Button>
                  </Link>
                </>
              )}
              {session?.user?.email && (
                <>
                  <Button color="black" onClick={() => signOut()}>
                    Logout
                  </Button>
                </>
              )}
            </Menu.Item>
          </Menu>
        </Drawer>
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
