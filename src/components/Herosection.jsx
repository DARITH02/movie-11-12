import React from "react";
import Bg from "../assets/hero-bg.png"

const Herosection = () => {
  return (
    <>
      <div
        className="h-screen "
        style={{
          background:
            `url(${Bg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          backgroundPosition:"center"
        }}
      >
        
      </div>
    </>
  );
};

export default Herosection;
