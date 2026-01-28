import React, { useEffect, useState } from "react";
import Herosection from "../components/Herosection";

import Card from "../components/Card";

const Home = () => {
  const [movies, setMovie] = useState([]);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNzhjNDQwZGMyNjJkMmZlMTBhMjE4OGQwZDZiMWM5OCIsIm5iZiI6MTc1NzE3NDY5My45OTMsInN1YiI6IjY4YmM1YmE1ZmNjNTI2MGVlMDliZmY4NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BuL7KJ2syviF-Vd8u0bysFBK971KVqQW3aHXL5BPiCU",
    },
  };

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc",
      options,
    )
      .then((res) => res.json())
      .then((res) => setMovie(res.results))
      .catch((err) => console.error(err));
      
  }, []);

  console.log(movies);

  return (
    <>
      <div>
        <Herosection />
      </div>
      <div className="bg-[#09041f] text-gray-50 ">
        <div className="md:w-11/12  m-auto">
          <h1 className="font-bold text-4xl lg:text-5xl ">Popular Page 1</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5 xl:gap-7 mt-9">
            {movies.map((m) => (
              <Card />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
