import React, { useState, useEffect } from "react";

export const useFetch = (apiPatch, queryTerm = "") => {
  const [data, setData] = useState([]);
  const url = `https://api.themoviedb.org/3/${apiPatch}?api_key=${process.env.REACT_APP_API_KEY}&query=${queryTerm}`;

  //https://api.themoviedb.org/3/search/movie?api_key=c855e11c98dfa36769202bdc50e95589&query={movie_name}

  useEffect(() => {
    async function moviesFetch() {
      const response = await fetch(url);
      const json = await response.json();
      setData(json.results);
    }
    moviesFetch();
  }, [url]);
  return { data };
};
