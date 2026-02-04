import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaEye, FaStar } from "react-icons/fa";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  //   console.log(id);
  const [mDetail, setMDetail] = useState({});

  const [key, setKey] = useState({});

  useEffect(() => {
    const getMovies = localStorage.getItem("movie");
    const movies = JSON.parse(getMovies);
    const find = movies.find((m) => m.id == id);
    const findKey = Object.keys(find);

    setKey(findKey);

    setMDetail(find);

    // console.log(movies);

    // console.log(find);
  }, []);

  console.log(mDetail);
  console.log(key);

  //   const [finding, setFind] = useState([]);

  return (
    <>
      <div className="bg-[#09041f] text-gray-50 ">
        <div className="md:w-11/12 m-auto">
          <div className="flex  justify-between w-full px-5 py-6">
            <h1 className="text-lg w-2/4 line-clamp-1 lg:w-full lg:text-3xl font-bold">
              {mDetail["name"]}
            </h1>
            <div className="flex items-center gap-5 bg-[#120a3a] px-6 py-2.5 rounded-lg">
              <span className="font-bold text-xl flex gap-2 items-center"><FaStar className="text-amber-700" />
              {
              mDetail['vote_average'] !== undefined ?
                   mDetail['vote_average'].toFixed(1) :
                    "N/A"}/10
              </span>
              <span className="text-2xl flex gap-2.5 items-center"><FaEye />
              {
              mDetail['vote_count'] >= 1000 ? 
              (mDetail['vote_count']/1000).toFixed(1)  + "K" 
              : mDetail['vote_count']
              }
             
              
              </span>
             </div>
            
          </div>

          <div className="grid lg:grid-cols-3 gap-5 px-1 lg:p-0">
            <div className=" lg:col-span-2 h-[500px] rounded-lg overflow-hidden">
              <img
                className="h-full w-full object-cover"
                src={`https://image.tmdb.org/t/p/w400//${mDetail["poster_path"]}`}
                alt=""
              />
            </div>
            <div className=" lg:col-span-1 h-[500px] rounded-lg overflow-hidden">
              <img
                className="h-full w-full object-fill"
                src={`https://image.tmdb.org/t/p/w400//${mDetail["poster_path"]}`}
                alt=""
              />
            </div>
          </div>

          <div className="lg:mt-10 mt-5">
            <h1 className="text-center text-3xl font-bold underline ">
              View Detail Movie
            </h1>
            <div className="lg:mt-12 mt-5 grid gap-6">
              <div className="grid grid-cols-[200px_auto]">
                <h1 className="text-2xl font-bold">{key[7]} </h1>
                <p className="text-xl">{mDetail[key[7]]}</p>
              </div>
              <div className="grid grid-cols-[200px_auto]">
                <h1 className="text-2xl font-bold">Relesase date</h1>
                <p className="text-xl">{mDetail["first_air_date"]}</p>
              </div>
              <div className="grid grid-cols-[200px_auto]">
                <h1 className="text-2xl font-bold">Title</h1>
                <p className="text-xl">{mDetail["name"]}</p>
              </div>
              <div className="grid grid-cols-[200px_auto]">
                <h1 className="text-2xl font-bold">Original language</h1>
                <p className="text-xl">{mDetail["original_language"]}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
