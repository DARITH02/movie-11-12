import React from "react";
import { FaStar } from "react-icons/fa";

const Card = () => {
  return (
    <>
      <div className="h-96 p-5 bg-[#130b39] shadow-lg rounded-xl hover:bg-[#18113b] cursor-pointer transition-all duration-100 ease-in-out">
        <img
          className="h-3/4 w-full object-cover rounded-lg"
          src="https://image.tmdb.org/t/p/w400//p4bW2sJKAwcHuLpfoZK7Zo63osA.jpg"
          alt=""
        />
        <div className="py-4 ">
          <h3 className="text-xl font-medium">The Rip</h3>
          <span className="flex gap-2.5 items-center mt-1.5">
            <span className="">
              <FaStar className="text-orange-400" />
            </span>
            <span className="text-xl">1200</span>
          </span>
        </div>
      </div>
    </>
  );
};

export default Card;
