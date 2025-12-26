import "./App.css";
import MovieCard from "./components/MovieCard";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Home />
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
