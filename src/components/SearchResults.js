import MovieCard from "./MovieCard";
export default function SearchResults({ movies }) {
  return (
    <section id="movie-section">
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </section>
  );
}
