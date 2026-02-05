import React, { useEffect, useRef, useState } from "react";
import Herosection from "../components/Herosection";

import Card from "../components/Card";
import axios from "axios";
import { Link } from "react-router-dom";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

const Home = () => {
  const [movies, setMovie] = useState([]);

  const [search, setSearch] = useState("");

  const [page, setPage] = useState(1);

  const [isLoading, setIsLoading] = useState(true);

  const topRef = useRef(null);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNzhjNDQwZGMyNjJkMmZlMTBhMjE4OGQwZDZiMWM5OCIsIm5iZiI6MTc1NzE3NDY5My45OTMsInN1YiI6IjY4YmM1YmE1ZmNjNTI2MGVlMDliZmY4NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BuL7KJ2syviF-Vd8u0bysFBK971KVqQW3aHXL5BPiCU",
    },
  };

  // useEffect(() => {
  //   // fetch(
  //   //   "https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc",
  //   //   options,
  //   // )
  //   //   .then((res) => res.json())
  //   //   .then((res) => setMovie(res.results))
  //   //   .catch((err) => console.error(err));

  //   setIsLoading(true);

  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 3000);

  //   axios
  //     .get(
  //       `https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=${page}&sort_by=popularity.desc`,
  //       options,
  //     )
  //     .then((res) => {
  //       setMovie(res.data.results);

  //       localStorage.setItem("movie", JSON.stringify(res.data.results));
  //     });
  // }, [page]);

  const fetchMovies = (async) => {
    try {
      setIsLoading(true);
      axios
        .get(
          `https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=${page}&sort_by=popularity.desc`,
          options,
        )
        .then((res) => {
          setMovie(res.data.results);

          localStorage.setItem("movie", JSON.stringify(res.data.results));
        });

      topRef.current.scrollIntoView({ behavior: "smooth" });
    } catch (err) {
      console.error(err);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 1500);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, [page]);

  // useEffect(()=>{

  // },[])

  const filterMovies = movies.filter((m) =>
    m.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <>
      {isLoading && (
        <div className="w-full h-screen bg-gray-400/70 fixed">
          <div className="fixed top-2/4 left-2/4 text-violet-50 bg-gray-400/50 w-52 h-52 rounded-full border-t-2 animate-spin transition-all duration-300"></div>
        </div>
      )}
      <div className="bg-[#09041f]">
        <Herosection />

        <div ref={topRef}></div>

        <input
          className="m-auto flex mt-25 border-2 px-5 py-3 text-gray-400 rounded-xl  text-xl w-3/12 placeholder:text-green-800"
          type="text"
          name=""
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search moves...."
        />
      </div>
      <div className="bg-[#09041f] text-gray-50 ">
        <div className="md:w-11/12  m-auto">
          <h1 className="font-bold text-4xl lg:text-5xl ">
            Popular Page {page}
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5 xl:gap-7 mt-9">
            {/* {setMovie.map((m, i) => (
              <Link to={`/detail/${m["id"]}`}>
                <Card
                  key={i}
                  title={m["name"]}
                  img={m["backdrop_path"]}
                  popular={m["popularity"]}
                />
              </Link>
            ))} */}

            {filterMovies.length > 0 ? (
              filterMovies.map((m) => (
                //
                <Link to={`/detail/${m["id"]}`}>
                  <Card
                    title={m["name"]}
                    img={m["backdrop_path"]}
                    popular={123}
                  />
                </Link>
              ))
            ) : (
              <h1 className="py-16 text-center text-4xl text-red-800 col-span-4">
                Page not found!
              </h1>
            )}
          </div>

          <div className="w-2/3 py-5 flex justify-between m-auto mt-10">
            <button
              onClick={() => setPage((prev) => Math.max(1, prev - 1))}
              className="py-3 px-7 bg-rose-700 text-xl flex items-center rounded-lg cursor-pointer hover:bg-rose-600 transition-all duration-200 font-medium"
            >
              <GrFormPrevious className="text-4xl mt-1.5" />
              Previous page
            </button>
            <button
              onClick={() => setPage((prev) => prev + 1)}
              className="py-3 px-7 bg-blue-700 text-xl rounded-lg flex items-center cursor-pointer hover:bg-blue-600 transition-all duration-200 font-medium"
            >
              Next Page
              <MdNavigateNext className="text-4xl mt-1.5" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
