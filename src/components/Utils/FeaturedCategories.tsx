import React from "react";
import { Card } from "antd";
import Link from "next/link";

interface Category {
  id: number;
  title: string;
  image: string;
}

interface FeaturedCategoriesProps {
  categories: Category[];
}

const FeaturedCategories: React.FC<FeaturedCategoriesProps> = ({
  categories,
}) => (
  <>
    <h3 className="text-3xl font-semibold">Featured Categories</h3>
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-6 p-4">
      {
        (console.log(categories),
        categories?.map((category) => (
          <Link key={category.id} href={`filterproducts/${category.id}`}>
            <div>
              <Card
                hoverable={true}
                className="flex justify-center"
                bordered={false}
              >
                <img src={category.image} alt="" />
                <p className="text-center mt-3">{category.title}</p>
              </Card>
            </div>
          </Link>
        )))
      }
    </div>
  </>
);

export default FeaturedCategories;
