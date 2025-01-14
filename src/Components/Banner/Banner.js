import React, { useEffect, useState } from "react";
import axios from "../../axios";
import { API_KEY, imageUrl } from "../../Constants/Constants";
import "./Banner.css";

function Banner() {
  const [movie, setMovie] = useState();
  useEffect(() => {
    axios
      .get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        console.log(response.data.results[0]);
        setMovie(
          response.data.results.sort(function (a, b) {
            return 0.1 - Math.random();
          })[5]
        );
      });
  }, []);

  const NumberFormat = ({ number }) => {
    const formatNumber = (number) => {
      if (number >= 1e9) {
        return (number / 1e9).toFixed(1) + "B"; // Billion
      } else if (number >= 1e6) {
        return (number / 1e6).toFixed(1) + "M"; // Million
      } else if (number >= 1e3) {
        return (number / 1e3).toFixed(1) + "K"; // Thousand
      } else {
        return number.toString(); // Return as is if less than 1000
      }
    };

    return <span>{formatNumber(number)}</span>;
  };

  console.log(movie);

  return (
    <div
      className="main"
      style={{
        backgroundImage: `url(${
          movie?.backdrop_path ? imageUrl + movie?.backdrop_path : ""
        })`,
        backgroundSize: "cover",
      }}
    >
      <div className="banner">
        <div className="content">
          <div className="head">
            <h1 className="title">
              {movie
                ? movie.original_title
                  ? movie.original_title
                  : movie.name
                : ""}
            </h1>
            <div className="raTing">
              <span id="rating">RATING</span>

              <i class="fa-solid fa-star">
                {" "}
                <span id="rating-1">
                  {movie ? movie.vote_average : ""}
                </span>{" "}
                <span id="rating-2">/10</span>
                <br />
                <p id="rating-3">
                  <NumberFormat number={movie ? movie.vote_count : ""} />
                </p>
              </i>
            </div>
          </div>

          <div className="banner_button">
            <button className="button-banner">Play</button>
            <button className="button-banner">My list</button>
          </div>
          <h1 className="discription">{movie ? movie.overview : ""}</h1>
          <p className="release">
            {" "}
            Release date:{" "}
            {movie
              ? movie.release_date
                ? movie.release_date
                : movie.first_air_date
              : ""}
          </p>
        </div>

        <div className="fade_bottom"></div>
      </div>
    </div>
  );
}

export default Banner;
