import React from "react";
import { Card } from "antd";
import Link from "next/link";

const FeaturedCategories: React.FC = () => (
  <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-6 p-4">
    <Link href="/products">
      <div>
        <Card hoverable={true} className="flex justify-center" bordered={false}>
          <img
            src="https://cdn-icons-png.flaticon.com/128/969/969425.png"
            alt=""
          />
        </Card>
      </div>
    </Link>
    <div>
      <Card hoverable={true} className="flex justify-center" bordered={false}>
        <img
          src="https://cdn-icons-png.flaticon.com/128/969/969425.png"
          alt=""
        />
      </Card>
    </div>
    <div>
      <Card hoverable={true} className="flex justify-center" bordered={false}>
        <img
          src="https://cdn-icons-png.flaticon.com/128/969/969425.png"
          alt=""
        />
      </Card>
    </div>
    <div>
      <Card hoverable={true} className="flex justify-center" bordered={false}>
        <img
          src="https://cdn-icons-png.flaticon.com/128/969/969425.png"
          alt=""
        />
      </Card>
    </div>
    <div>
      <Card hoverable={true} className="flex justify-center" bordered={false}>
        <img
          src="https://cdn-icons-png.flaticon.com/128/969/969425.png"
          alt=""
        />
      </Card>
    </div>
    <div>
      <Card hoverable={true} className="flex justify-center" bordered={false}>
        <img
          src="https://cdn-icons-png.flaticon.com/128/969/969425.png"
          alt=""
        />
      </Card>
    </div>
  </div>
);

export default FeaturedCategories;
