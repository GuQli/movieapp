import { Link } from "react-router-dom";
import PageNotFoundImg from "../Assets/pagenotfound.jpg";
import { Button } from "../components/index";
import { useEffect } from "react";
import { useTitle } from "../hooks/useTitle";

export const PageNotFound = () => {
  useTitle("page not found");

  return (
    <main>
      <section>
        <div className="flex flex-col items-center">
          <p className="text-7xl font-medium dark:text-white py-2 my-8">
            404 Error
          </p>
          <div className="max-w-lg">
            <img className="rounded-lg" src={PageNotFoundImg} alt="404" />
          </div>
        </div>
        <div className="flex flex-col items-center">
          <Link to={"/"}>
            <Button>Back Home</Button>
          </Link>
        </div>
      </section>
    </main>
  );
};
