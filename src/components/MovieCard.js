import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    axios
      .get(`https://www.omdbapi.com/?i=${movie.imdbID}&apikey=882026d9`)
      .then((response) => {
        setMovieDetails(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [movie.imdbID]);

  return (
    <article className="movie-card">
      {movieDetails && (
        <>
          <figure>
            <img
              src={
                movieDetails.Poster !== "N/A"
                  ? movieDetails.Poster
                  : "https://picsum.photos/200/300"
              }
              alt={movie.Title}
              className="movie-poster"
            />
          </figure>
          <section className="movie-details">
            <h3> {movieDetails.Title} </h3>
            <section className="card-text">

            </section>
            <section id="link-to-movieinfo">
               <Link id="les-mer" to={`/movie-info/${movie.imdbID}`}>les mer</Link>
            </section>
          </section>
        </>
      )}
    </article>
  );
}
