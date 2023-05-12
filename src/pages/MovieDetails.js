import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import noImage from "../Assets/noimage.png";
import imdblogo from "../Assets/imdblogo.png";

export const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const params = useParams();

  const image = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
    : noImage;

  useEffect(() => {
    async function movieFetch() {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${params.id.substring(
          1
        )}?api_key=c855e11c98dfa36769202bdc50e95589`
      );
      const json = await response.json();
      setMovie(json);
      console.log(json);
    }
    movieFetch();
  }, [params.id]);

  useEffect(() => {
    document.title = `${movie.title}`;
  });

  return (
    <main>
      <section className="flex justify-around flex-wrap py-5">
        <div className="max-w-sm my-4">
          <img src={image} alt={movie.title} />
        </div>
        <div className="flex flex-col max-w-3xl dark:text-white text-lg">
          <h1 className="text-4xl font-bold dark:text-white my-4 lg:text-left mobile:text-2xl">
            {movie.title}
          </h1>
          <p className=" mb-3 tracking-tight text-2xl font-light mobile:text-xl">
            {movie.overview}
          </p>
          {movie.genres ? (
            <p className="my-7 flex flex-wrap gap-2">
              {movie.genres.map((genre) => (
                <span
                  className="mr-2 border border-gray-200 rounded dark:border-gray-600 p-2"
                  key={genre.id}
                >
                  {genre.name}
                </span>
              ))}
            </p>
          ) : (
            ""
          )}

          <div className="flex items-center">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <p className="ml-2 text-sm font-bold text-gray-900 dark:text-white">
              {String(Math.round(movie.vote_average * 10) / 10)}
            </p>
            <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
            <span className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white">
              {movie.vote_count} reviews
            </span>
          </div>
          <p className="my-4">
            <span className="mr-2 font-bold">Runtime:</span>
            <span>{movie.runtime} min.</span>
          </p>
          <p className="my-4">
            <span className="mr-2 font-bold">Budget:</span>
            <span>{movie.budget} mln.</span>
          </p>
          <p className="my-4">
            <span className="mr-2 font-bold">Revenue:</span>
            <span>{movie.revenue} mln.</span>
          </p>
          <p className="my-4">
            <span className="mr-2 font-bold">Release Date:</span>
            <span>{movie.release_date}</span>
          </p>
          <p className="my-4">
            <a
              className="mr-2 font-bold cursor:pointer flex items-center justify-start"
              href={`https://www.imdb.com/title/${movie.imdb_id}/?ref_=hm_tpks_tt_i_3_pd_tp1_pbr_ic`}
              target="blank"
            >
              <span>
                <img src={imdblogo} className="w-20 px-4" />
              </span>
              Link
            </a>
          </p>
        </div>
      </section>
    </main>
  );
};
