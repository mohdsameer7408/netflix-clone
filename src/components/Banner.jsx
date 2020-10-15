import React, { useEffect, useState } from "react";
import "../assets/css/Banner.css";
import axios from "../axios";
import requests from "../requests";

function Banner() {
  const [movie, setMovie] = useState();

  const fetchData = async () => {
    const response = await axios.get(requests.fetchNetflixOriginals);
    setMovie(
      response.data.results[
        Math.floor(Math.random() * response.data.results.length - 1)
      ]
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_content">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_description">
          {movie?.overview.length > 150
            ? movie?.overview.slice(0, 150) + "..."
            : movie?.overview}
        </h1>
      </div>
      <div className="banner_fadeBottom"></div>
    </header>
  );
}

export default Banner;
