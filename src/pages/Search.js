import { useFetch } from "../hooks/useFetch";
import { Card } from "../components/Card";
import { useSearchParams } from "react-router-dom";
import { useTitle } from "../hooks/useTitle";

export const Search = ({ apiPatch }) => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");
  const { data: movies } = useFetch(apiPatch, queryTerm);

  useTitle(`Search results for '${queryTerm}'`);

  return (
    <main>
      <section>
        <p className="text-2xl font-medium dark:text-white">
          {`${movies.length}` > 0
            ? `Search Results for '${queryTerm}'`
            : `No movies found for '${queryTerm}'`}
        </p>
      </section>
      <section className="max-w-7xl py-7">
        <div className="flex justify-start flex-wrap other:justify-evenly ">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
};
