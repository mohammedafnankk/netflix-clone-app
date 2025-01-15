import React, { useState, useEffect } from "react";
import axios from "../../axios";
import { imageUrl, API_KEY } from "../../Constants/Constants";
import YouTube from "react-youtube";
import "./RowPost.css";
function RowPost(props) {
  const [movies, setMovies] = useState([]);
  const [urlId, setUrlId] = useState("");
  useEffect(() => {
    axios
      .get(props.url)
      .then((response) => {
        console.log(response.data);
        setMovies(response.data.results);
      })
      .catch((err) => {
        alert("APY KEY NOT FOUND");
      });
  }, []);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleMovieTrailer = (id) => {
    console.log(id);
    axios
      .get(
        `/movie/${id}/videos?api_key=${API_KEY}&language=en-US/&=&=&=e54cdf936380cc5fa47ef5078843d7d2`
      )
      .then((response) => {
        console.log(response.data);
        if (response.data.results.length !== 0) {
          setUrlId(response.data.results[0]);
        } else {
          alert("Trailer not found");
        }
      }).catch((error)=>{
        alert("Trailer not found");
        
      })
  };

  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
           {movies.map((obj) => (
          <img
            onClick={() => handleMovieTrailer(obj.id)}
            src={`${imageUrl + obj.poster_path}`}
            className={props.isSmall ? "smallPoster" : "poster"}
            alt="poster"
          />
        ))}
       
        
      </div>
      {urlId && <YouTube videoId={urlId.key} opts={opts} />}
    </div>
  );
}

export default RowPost;
