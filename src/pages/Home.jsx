import React, { useEffect, useState } from "react";
import Herosection from "../components/Herosection";

import Card from "../components/Card";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [movies, setMovie] = useState([]);

  const [search, setSearch] = useState("");

  const [a, seta] = useState();

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNzhjNDQwZGMyNjJkMmZlMTBhMjE4OGQwZDZiMWM5OCIsIm5iZiI6MTc1NzE3NDY5My45OTMsInN1YiI6IjY4YmM1YmE1ZmNjNTI2MGVlMDliZmY4NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BuL7KJ2syviF-Vd8u0bysFBK971KVqQW3aHXL5BPiCU",
    },
  };

  useEffect(() => {
    // fetch(
    //   "https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc",
    //   options,
    // )
    //   .then((res) => res.json())
    //   .then((res) => setMovie(res.results))
    //   .catch((err) => console.error(err));

    axios
      .get(
        "https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=30&sort_by=popularity.desc",
        options,
      )
      .then((res) => {
        setMovie(res.data.results);

        localStorage.setItem("movie", JSON.stringify(res.data.results));
      });
  }, []);

  // useEffect(()=>{

  // },[])

  const filterMovies = movies.filter((m) =>
    m.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <>
      <div className="bg-[#09041f]">
        <Herosection />
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
          <h1 className="font-bold text-4xl lg:text-5xl ">Popular Page 1</h1>

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

            {filterMovies.length > 0
              ? filterMovies.map((m) => (
                  //
                  <Card
                    title={m["name"]}
                    img={m["backdrop_path"]}
                    popular={123}
                  />
                ))
              : "not found"}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
