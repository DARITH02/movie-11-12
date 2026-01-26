import React from "react";
import Bg from "../assets/hero-bg.png";
import Logo from "../assets/logo.png";
import Hero from "../assets/hero.png";

const Herosection = () => {
  return (
    <>
      <div
        className="h-screen flex flex-col items-center"
        style={{
          background: `url(${Bg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
        }}
      >
        <div className="mt-20">
          <img src={Logo} alt="" />
        </div>

        <div className="w-full flex justify-center mt-24">
          <img className="w-2/6" src={Hero} alt="" />
        </div>

        <div className="mt-9 w-2/5">
          <span className="text-gray-50 text-5xl font-bold block text-center">
            Find Movies You’ll Love Without the Hassle
          </span>
        </div>
      </div>
    </>
  );
};

export default Herosection;
