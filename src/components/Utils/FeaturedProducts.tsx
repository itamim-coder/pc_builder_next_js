import React from "react";
import { Card } from "antd";
import Link from "next/link";

const { Meta } = Card;

interface KeyFeatures {
  Brand: string;
  Model: string;
  Specification: string;
  Port: string;
  Type: string;
  Voltage: string;
  // Add more properties if needed
}
interface Review {
  id: number;
  author: string;
  rating: number;
  comment: string;
}

interface Product {
  [x: string]: any;
  id: number;
  title: string;
  image: string;
  categoryId: number;
  status: "In Stock" | "Out of Stock";
  price: number;
  description: string;
  keyFeatures: KeyFeatures;
  individualRating: number;
  averageRating: number;
  reviews: Review[];
}

interface FeaturedProductsProps {
  products: Product[];
}
const FeaturedProducts: React.FC<FeaturedProductsProps> = ({ products }) => {
  
return(
  
  <>
    {/* {console.log(products)} */}
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 p-4">
      {products?.slice(0,6)?.map((product) => (
        <Link href={`/products/${product?._id}`}>
          <Card
            hoverable
            style={{ width: 240 }}
            cover={
              <img
                alt="example"
                src={product?.image}
              />
            }
          >
            <Meta title={product?.title} description="www.instagram.com" />
          </Card>
        </Link>
      ))}
    </div>
  </>
)};

export default FeaturedProducts;
