import React, { useContext, useEffect, useState } from "react";
import CardList from "../CardList/CardList";
import { Movie } from "../../types/Types";
import { MyContext } from "../../App";

const Upcoming = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const { isDarkMode } = useContext(MyContext);
  useEffect(() => {
    console.log(import.meta.env.VITE_TMDB_API_KEY);
    async function getTrendingsMovies() {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`,
        },
      };

      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
          options
        );
        const data = await response.json();
        setMovies(data.results);
      } catch (e) {
        console.log(e);
      }
    }

    getTrendingsMovies();
  }, []);

  return (
    <div>
      <h2 className={`show_category ${isDarkMode ? "darkMode" : ""}`}>
        Upcoming
      </h2>
      <div>
        <CardList results={movies} />
      </div>
    </div>
  );
};

export default Upcoming;
