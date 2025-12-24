import MovieCard from "../components/MovieCard";

function Home() {
  const movies = [
    { id: 1, title: "Inception", release_date: "2010-07-16" },
    { id: 2, title: "The Godfather", release_date: "1972-03-24" },
    { id: 3, title: "Pulp Fiction", release_date: "1994-10-14" },
  ];

  return (
    <div className="home">
      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default Home;
