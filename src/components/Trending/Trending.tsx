import React, { useContext, useEffect, useState } from "react";
import CardList from "../CardList/CardList";
import { Movie } from "../../types/Types";
import { MyContext } from "../../App";

type Props = {
  isShow: boolean;
};

const Trending = (props: Props) => {
  const [movies, setMovies] = useState<Movie[]>([]);

  const { isDarkMode } = useContext(MyContext);

  useEffect(() => {
    async function getTrendingMovies() {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`,
        },
      };

      let apiURL;
      if (props.isShow) {
        apiURL = "https://api.themoviedb.org/3/trending/tv/day?language=en-US";
      } else {
        apiURL =
          "https://api.themoviedb.org/3/trending/movie/day?language=en-US";
      }

      try {
        const response = await fetch(apiURL, options);
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
        Trending
      </h2>
      <div>
        <CardList results={movies} isShow={props.isShow} />
      </div>
    </div>
  );
};

export default Trending;
