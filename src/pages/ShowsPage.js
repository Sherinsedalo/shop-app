import { Link } from "react-router-dom";
import { useShows } from "../store-contexts/ShowContext";
import { useState } from "react";
import "../pages/ShowsPage.css";

export function ShowsPage() {
  const { shows } = useShows();
  const [sorted, setSorted] = useState(false);

  const sortedShows = sorted
    ? [...shows].sort((a, b) => b.critic_score - a.critic_score)
    : shows;

  return (
    <div className="shows-container">
      <h1>Shows you could watch:</h1>
      <button onClick={() => setSorted(!sorted)} className="sorting-btn">
        {!sorted ? "sort by rating" : "reset sorting"}
      </button>
      {sortedShows.length === 0 ? (
        <p>information is loading...</p>
      ) : (
        sortedShows.map((show) => (
          <div key={show.id} className="show-card">
            <h2>{show.title}:</h2>
            <p>{show.plot_overview}</p>
            <p>{show.genre_names.join(", ")}</p>
            <p>Critic Score: {show.critic_score}</p>
            <Link to={{ pathname: `/show/${show.id}` }} className="details-btn">
              More details about this show
            </Link>
          </div>
        ))
      )}

      <Link to="/home" className="homepage-btn">
        {" "}
        Go to the home page
      </Link>
    </div>
  );
}
