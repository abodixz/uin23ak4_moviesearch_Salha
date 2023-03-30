import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function MovieInfo() {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    axios
      .get(`https://www.omdbapi.com/?i=${id}&apikey=882026d9`)
      .then((response) => {
        setMovieDetails(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <div id="movieinfo-info">
      {movieDetails ? (

        <section id="container">

 
        <section id="movieinfo-section">

            <section id="movieinfo-img">
                <figure>

                    <h1>
                        <img src={movieDetails.Poster !== "N/A" ? movieDetails.Poster : "https://picsum.photos/200/300"} alt={movieDetails.Title}/> 
                    </h1>
                    
                </figure>
            </section>

            <section id="movieinfo-text">
                <h1>{movieDetails.Title}</h1>
                <p className="movieinfo-p">
                    <span>År:</span> {movieDetails.Year}
                </p>
                
                <p className="movieinfo-p">
                    <span>Sjanger:</span> {movieDetails.Genre}
                </p>
                <p className="movieinfo-p">
                    <span>Regissør:</span> {movieDetails.Director}
                </p>
                <p className="movieinfo-p">
                    <span>Skuespillere:</span> {movieDetails.Actors}
                </p>
                {movieDetails.Awards && (<p className="movieinfo-p"><span> Priser:</span> {movieDetails.Awards}</p>)}

                <section id="movie-link">
                    <Link id="link-bak" to="/">Tilbake til søk</Link>
                </section>

            </section>
        </section>
        </section>
         ) : (<p >Finner ingen detaljer for denne filmen.</p>)}

    </div>
  );
}
