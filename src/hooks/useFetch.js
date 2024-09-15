import React, { useState, useEffect } from "react";

export function useFetch(url) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`,
        },
      };

      try {
        const response = await fetch(url, options);
        const data = await response.json();
        console.log(data.results);
        setData(data.results);
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    }
    getData();
  }, [url]);
  return { data, loading };
}
