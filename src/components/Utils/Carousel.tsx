import React from "react";
import { Carousel } from "antd";

const contentStyle: React.CSSProperties = {
  height: "460px",
  color: "#fff",
  lineHeight: "460px",
  textAlign: "center",
  background: "#B2BEB5",
};

const CarouselComponent: React.FC = () => (
  <Carousel autoplay effect="fade">
    <div>
      <div style={contentStyle} className="lg:flex lg:justify-between ">
        <h1 className="text-black text-3xl flex items-center font-bold">Unleash Your Computing Potential. Discover the Perfect PC for You.</h1>
        <img className="w-1/2 opacity-90 "
          src="https://templatekits.themewarrior.com/kompi/wp-content/uploads/sites/69/2022/11/post-dummy-1-768x407.jpg"
          alt=""
        />
      </div>
    </div>
    <div>
      <div style={contentStyle} className="flex justify-between ">
        <h1 className="text-black text-3xl flex items-center font-bold">Elevate Your Experience. Find Your Ultimate PC Companion Today</h1>
        <img className="w-1/2 opacity-90"
          src="https://templatekits.themewarrior.com/kompi/wp-content/uploads/sites/69/2022/11/post-dummy-2-768x407.jpg"
          alt=""
        />
      </div>
    </div>
    <div>
      <div style={contentStyle} className="flex justify-between ">
        <h1 className="text-black text-3xl flex items-center font-bold" >Power and Performance in Every Byte. Explore Our Range of PCs.</h1>
        <img className="w-1/2 opacity-90"
          src="https://templatekits.themewarrior.com/kompi/wp-content/uploads/sites/69/2022/11/post-dummy-768x407.jpg"
          alt=""
        />
      </div>
    </div>
    <div>
      <div style={contentStyle} className="flex justify-between ">
        <h1 className="text-black text-3xl flex items-center font-bold">Your Dream PC Awaits. Embrace Innovation and Performance with Us.</h1>
        <img className="w-1/2 opacity-90"
          src="https://templatekits.themewarrior.com/kompi/wp-content/uploads/sites/69/2022/11/post-dummy-2-768x407.jpg"
          alt=""
        />
      </div>
    </div>
  
   
 
  </Carousel>
);

export default CarouselComponent;
