import { useState, useEffect } from "react";
import axios from "axios";
import SearchResults from "./SearchResults";

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://www.omdbapi.com/?s=james%20bond&apikey=882026d9&type=movie&plot=short&r=json&page=1"
      )
      .then((response) => {
        const movies = response.data.Search;
        if (movies) {
          setMovies(movies.slice(0, 10)); 
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function handleSearch(event) {
    event.preventDefault();
    if (searchTerm.length < 3) {
      setErrorMessage("Søket må inneholde minst tre tegn.");
      setMovies([]);
      return;
    }
    axios
      .get(`https://www.omdbapi.com/?s=${searchTerm}&apikey=882026d9`)
      .then((response) => {
        const movies = response.data.Search;
        if (movies) {
          setMovies(movies);
          setErrorMessage("");
        } else {
          setMovies([]);
          setErrorMessage("Ingen resultater funnet.");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function handleRefresh() {
    window.location.reload();
  }

  return (
    <div>
      
        <nav className="navbar">
          <a href="#" onClick={handleRefresh}>Movie</a>
            <ul>
                <li>
                    <form id="search-form" onSubmit={handleSearch}>
                      <input
                        id="search-input"
                        type="text"
                        value={searchTerm}
                        onChange={(event) => setSearchTerm(event.target.value)}
                        
                        />
                      <button type="submit">Søk</button>
                    </form>
                    {errorMessage && <p id="minst-3tegn">{errorMessage}</p>}
                </li>
            </ul>
      </nav>

      <main>
        <section>
            <SearchResults movies={movies} />
        </section>
      </main>
    </div>
  );
}
