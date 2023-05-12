import { Routes, Route } from "react-router-dom";
import { MovieDetails, MovieList, PageNotFound, Search, About } from "../pages";

import React from "react";

export const AllRoutes = () => {
  return (
    <div className="dark:bg-gray-800">
      <Routes>
        <Route
          path="/"
          element={<MovieList apiPatch="movie/now_playing" title="home" />}
        />
        <Route path="movie/:id" element={<MovieDetails />} />
        <Route
          path="popular"
          element={<MovieList apiPatch="movie/popular" title="popular" />}
        />
        <Route
          path="toprated"
          element={<MovieList apiPatch="movie/top_rated" title="top rated" />}
        />
        <Route
          path="upcoming"
          element={<MovieList apiPatch="movie/upcoming" title="upcoming" />}
        />
        <Route path="search" element={<Search apiPatch="search/movie" />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="about" element={<About title="about" />} />
      </Routes>
    </div>
  );
};
