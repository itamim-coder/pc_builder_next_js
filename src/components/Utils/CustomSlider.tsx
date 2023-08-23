import React, { useEffect, useCallback, useRef } from "react";
import  Glider  from "react-glider";
// Replace with the actual Glider import

const MAX = 2; // Replace with the maximum index of your slides
const INTERVAL = 3000; // Replace with your desired interval in milliseconds

const CustomSlider = () => {
  const intervalRef = useRef(null);

  const callbackRef = useCallback((glider) => {
    if (glider) {
      if (!intervalRef.current) {
        intervalRef.current = setInterval(() => {
          let index = glider.page;
          if (index < MAX) {
            index += 1;
          } else {
            index = 0;
          }
          glider.scrollItem(index, false);
        }, INTERVAL);
      }
    }
  }, []);

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <Glider
      className="glider-container"
      draggable
      hasDots
      slidesToShow={1}
      scrollLock
      ref={callbackRef}
    >
      <div>
        <span>1</span>
      </div>
     
      {/* Add more slide divs here */}
    </Glider>
  );
};

export default CustomSlider;
