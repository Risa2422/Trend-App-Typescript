import React, { useContext, useEffect, useState } from "react";
import { Movie } from "../../types/Types";
import CardList from "../CardList/CardList";
import { MyContext } from "../../App";

const OnTheAir = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const { isDarkMode } = useContext(MyContext);

  useEffect(() => {
    console.log(import.meta.env.VITE_TMDB_API_KEY);
    async function getTrendingMovies() {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`,
        },
      };

      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=1",
          options
        );
        const data = await response.json();
        setMovies(data.results);
      } catch (e) {
        console.log(e);
      }
    }
    getTrendingMovies();
  }, []);

  return (
    <div>
      <h2 className={`show_category ${isDarkMode ? "darkMode" : ""}`}>
        On The Air
      </h2>
      <div>
        <CardList results={movies} />
      </div>
    </div>
  );
};

export default OnTheAir;
