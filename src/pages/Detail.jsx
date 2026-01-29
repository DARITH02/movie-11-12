import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const [movies, setMovie] = useState([]);
  const [finding, setFind] = useState(null);
  const { id } = useParams();
  //   console.log(id);

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
        "https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=10&sort_by=popularity.desc",
        options,
      )
      .then((res) => setMovie(res.data.results));

    const find = movies.find((m) => m.id == id);

    setFind(find);

    // console.log(find);
  }, []);

  //   const [finding, setFind] = useState([]);

  return <div>{finding["name"]}</div>;
};

export default Detail;
