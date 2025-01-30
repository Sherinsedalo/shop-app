import { useState, useEffect } from "react";
import { getShows } from "../components/api/showInfo";
import { Link } from "react-router-dom";
export function ShowsPage() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    getShows().then((data) => setShows(data));
  }, []);

  return (
    <div>
      <h1>Shows you could watch:</h1>
      {shows.length === 0 ? (
        <p>information is loading...</p>
      ) : (
        shows.map((show) => (
          <div key={show.id}>
            <h2>{show.title}:</h2>
            <p>{show.description}</p>
            <p>{show.genre}</p>
          </div>
        ))
      )}
      <Link to="/home"> Go to the home page</Link>
    </div>
  );
}
