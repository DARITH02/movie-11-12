import React from "react";
import Bg from "../assets/hero-bg.png";
import Logo from "../assets/logo.png";
import Hero from "../assets/hero.png";

const Herosection = () => {
  return (
    <>
      <div
        className="xl:h-screen flex flex-col items-center"
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

        <div className="w-full flex justify-center mt-16 lg:mt-24">
          <img
            className="w-4/5 sm:w-4/5 md:w-2/3 lg:w-2/4 xl:w-2/6"
            src={Hero}
            alt=""
          />
        </div>

        <div className="mt-9 w-4/5 md:w-2/4 xl:w-2/5">
          <span className="text-gray-50 text-3xl md:text-4xl xl:text-5xl font-bold block text-center">
            Find Movies You’ll Love Without the Hassle
          </span>
        </div>
      </div>
    </>
  );
};

export default Herosection;
