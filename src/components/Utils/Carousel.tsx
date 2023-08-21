import React, { useState } from "react";
import type { RadioChangeEvent } from "antd";
import { Carousel, Radio } from "antd";
import type { DotPosition } from "antd/es/carousel";

const contentStyle: React.CSSProperties = {
  height: "h-screen",
  color: "#fff",
  lineHeight: "h-screen",
  textAlign: "center",
  background: "#364d79",
};

const CarouselComponent: React.FC = () => {
  const [dotPosition, setDotPosition] = useState<DotPosition>("right");

  return (
    <>
      <Carousel autoplay dotPosition={dotPosition}>
        <div className="h-screen hero-overlay bg-opacity-60">
          <img className="w-full" src="https://cdn.w600.comps.canstockphoto.com/pages-of-holy-koran-rosary-stock-photograph_csp14039595.jpg" alt="" />
        </div>
        <div className="h-screen">
        <img className="w-full" src="https://cdn.w600.comps.canstockphoto.com/pages-of-holy-koran-rosary-stock-photograph_csp14039595.jpg" alt="" />
        </div>
        <div className="h-screen">
        <img className="w-full" src="https://cdn.w600.comps.canstockphoto.com/pages-of-holy-koran-rosary-stock-photograph_csp14039595.jpg" alt="" />
        </div>
        <div className="h-screen">
        <img className="w-full" src="https://cdn.w600.comps.canstockphoto.com/pages-of-holy-koran-rosary-stock-photograph_csp14039595.jpg" alt="" />
        </div>
      </Carousel>
    </>
  );
};

export default CarouselComponent;
