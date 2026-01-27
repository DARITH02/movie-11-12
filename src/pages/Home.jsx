import React from "react";
import Herosection from "../components/Herosection";

const Home = () => {
  return (
    <>
      <div>
        <Herosection />
      </div>
      <div className="bg-[#09041f] text-gray-50 ">
        <div className="md:w-11/12  m-auto">
          <h1 className="font-bold text-4xl lg:text-5xl ">Popular Page 1</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2.5 md:gap-5 xl:gap-10 mt-9">
            <div className="h-96 bg-blue-500"></div>
            <div className="h-96 bg-blue-500"></div>
            <div className="h-96 bg-blue-500"></div>
            <div className="h-96 bg-blue-500"></div>
            <div className="h-96 bg-blue-500"></div>
            <div className="h-96 bg-blue-500"></div>
            <div className="h-96 bg-blue-500"></div>
            <div className="h-96 bg-blue-500"></div>
            <div className="h-96 bg-blue-500"></div>
            <div className="h-96 bg-blue-500"></div>
            <div className="h-96 bg-blue-500"></div>
          </div>
            </div>
      </div>
    </>
  );
};

export default Home;
