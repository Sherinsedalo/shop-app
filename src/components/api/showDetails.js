import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const API_KEY = "33gZNz0WLTxkEBQWSAAGlbiH9C90HEbB9DJcqRJ7";

export const ShowDetail = () => {
  const { id } = useParams();
  const [shows, setShows] = useState(null);

  useEffect(() => {
    const fetchShowDetails = async () => {
      try {
        const response = await fetch(
          `https://api.watchmode.com/v1/title/${id}/details/?apiKey=${API_KEY}`
        );
        const data = await response.json();
        setShows(data);
      } catch (error) {
        console.log("error retrieving data", error);
      }
    };
    fetchShowDetails();
  }, [id]);

  if (!shows) return <p>information is loading</p>;

  return (
    <div>
      <h1>{shows.title}</h1>
      <img src={shows.poster_url} />
      <p>{shows.plot_overview}</p>
      <p>{shows.genre_names}</p>
      <div>
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/{shows.trailer}`}
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
      <Link to="/home">Back to the homepage</Link>
    </div>
  );
};
