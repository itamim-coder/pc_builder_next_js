import React from "react";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";
import Link from "next/link";

const items: MenuProps["items"] = [

    { key: 1, label: "CPU / Processor" },
    { key: 2, label: "Motherboard" },
    { key: 3, label: "RAM" },
    { key: 4, label: "Power Supply Unit" },
    { key: 5, label: "Storage Device" },
    { key: 6, label: "Monitor" },
    { key: 7, label: "Others" },

];

const DropDown: React.FC = () => (
  <Dropdown className="text-white" menu={{ items }}>
    <Link href="" onClick={(e) => e.preventDefault()}>
      <Space>
        Categories
        <DownOutlined />
      </Space>
    </Link>
  </Dropdown>
);

export default DropDown;
