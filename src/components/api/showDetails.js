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

        const sourcesResponse = await fetch(
          `https://api.watchmode.com/v1/title/${id}/sources?apiKey=${API_KEY}`
        );
        const sourcesData = await sourcesResponse.json();

        const netflixSource = sourcesData.find(
          (source) => source.name === "Netflix"
        );

        setShows({
          ...data,
          netflixLink: netflixSource ? netflixSource.web_url : null,
        });
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
      <img src={shows.poster_url} alt={`${shows.title}'s Poster`} />
      <p>{shows.plot_overview}</p>
      <p>{shows.genre_names}</p>
      <div>
        <iframe
          width="560"
          height="315"
          src={shows.trailer}
          title={`${shows.ttile}'s youtube trailer`}
          frameBorder="0"
          allow="accelerometer; 
  autoplay; 
  encrypted-media; 
  gyroscope; 
  web-share"
          allowfullscreen
        ></iframe>

        {shows.netflixLink && (
          <p>
            <a href={shows.netflixLink} rel="noopener noreferrer">
              <button>Check it on netflix</button>
            </a>
          </p>
        )}
      </div>
      <Link to="/home">Back to the homepage</Link>
    </div>
  );
};
