import { Link, useParams } from "react-router-dom";
import { useShows } from "../../store-contexts/ShowContext";
import "./showDetails.css";

export const ShowDetail = () => {
  const { id } = useParams();
  const { shows } = useShows();

  const showDetails = shows.find((show) => show.id === parseInt(id));

  if (!showDetails) return <p>information is loading</p>;

  return (
    <div className="details-container" style={{backgroundImage: `url(${showDetails.backdrop})`}}>
      <div className="details-content">
      <h1 className="show-title">{showDetails.title}</h1>
      <div className="show-display">
      <img
        src={showDetails.poster}
        alt={`${showDetails.title}'s Poster`}
        className="show-poster"
      />
      <p className="show-description">{showDetails.plot_overview}</p>
    
      </div>
      <p>{showDetails.genre_names.join(', ')}</p>
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
              <button className="netflix-btn">Check it on netflix</button>
            </a>
          </p>
        )}
      </div>
<div className="btn-container">
      <Link to='/shows' className="to-shows-btn">Go back</Link>
      <Link to="/home" className="homepage-btn">
       Homepage
      </Link>
      </div>
      </div>
    </div>
  );
};
