import { Link, useParams } from "react-router-dom";
import { useShows } from "../../store-contexts/ShowContext";

//const API_KEY = "33gZNz0WLTxkEBQWSAAGlbiH9C90HEbB9DJcqRJ7";
//const API_KEY = "NOQIgVpOUBSAZQuIDzSCO9qt0XLvF1pbTdQWpJHY ";

export const ShowDetail = () => {
  const { id } = useParams();
  const { shows } = useShows();

  const showDetails = shows.find((show) => show.id === parseInt(id));

  if (!showDetails) return <p>information is loading</p>;

  return (
    <div>
      <h1>{showDetails.title}</h1>
      <img src={showDetails.poster} alt={`${showDetails.title}'s Poster`} />
      <p>{showDetails.description}</p>
      <p>{showDetails.genre}</p>
      <div>
        <iframe
          width="560"
          height="315"
          src={showDetails.trailer}
          title={`${showDetails.title}'s youtube trailer`}
          frameBorder="0"
          allow="accelerometer; 
  autoplay; 
  encrypted-media; 
  gyroscope; 
  web-share"
          allowFullScreen
        ></iframe>

        {showDetails.netflixLink && (
          <p>
            <a href={showDetails.netflixLink}>
              <button>Check it on netflix</button>
            </a>
          </p>
        )}
      </div>
      <Link to="/home">Back to the homepage</Link>
    </div>
  );
};
