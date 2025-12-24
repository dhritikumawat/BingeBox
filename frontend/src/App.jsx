import "./App.css";
import MovieCard from "./components/MovieCard";

function App() {
  return (
    <div>
      <MovieCard
        movie={{
          title: "Inception",
          release_date: "2010-07-16",
        }}
      />
      <MovieCard
        movie={{
          title: "Joe's Film",
          release_date: "2010-07-16",
        }}
      />
    </div>
  );
}

export default App;
