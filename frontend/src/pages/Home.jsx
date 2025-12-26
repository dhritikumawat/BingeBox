import MovieCard from "../components/MovieCard";
import { useState } from "react";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const movies = [
    { id: 1, title: "Inception", release_date: "2010-07-16" },
    { id: 2, title: "The Godfather", release_date: "1972-03-24" },
    { id: 3, title: "Pulp Fiction", release_date: "1994-10-14" },
  ];

  const handleSearch = (event) => {
    event.preventDefault();
    alert(searchQuery);
    setSearchQuery("-----");
  };

  return (
    <div className="home">
      <form className="search-form" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search movies..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default Home;
