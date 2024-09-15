import React, { useEffect, useState, useContext } from "react";
import CardList from "../CardList/CardList";
import { Movie } from "../../types/Types";
import { MyContext } from "../../App";

const AiringToday = () => {
  const [shows, setShows] = useState<Movie[]>([]);

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
          "https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1'",
          options
        );
        const data = await response.json();
        setShows(data.results);
      } catch (e) {
        console.log(e);
      }
    }
    getTrendingMovies();
  }, []);

  return (
    <div>
      <h2 className={`show_category ${isDarkMode ? "darkMode" : ""}`}>
        Airing Today
      </h2>
      <div>
        <CardList results={shows} />
      </div>
    </div>
  );
};

export default AiringToday;
