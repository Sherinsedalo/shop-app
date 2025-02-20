import { createContext, useState, useContext, useEffect } from "react";

const ShowContext = createContext();

export const ShowProvider = ({ children }) => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const getShows = async () => {
      //const API_KEY = "33gZNz0WLTxkEBQWSAAGlbiH9C90HEbB9DJcqRJ7";
      const API_KEY = "NOQIgVpOUBSAZQuIDzSCO9qt0XLvF1pbTdQWpJHY";
      const showNames = ["The vampire diaries", "Station 19", "This is us"];
      const shows = [];

      try {
        for (const name of showNames) {
          const searchResponse = await fetch(
            `https://api.watchmode.com/v1/search/?apiKey=${API_KEY}&search_field=name&search_value=${encodeURIComponent(
              name
            )}`
          );
          const searchData = await searchResponse.json();

          if (searchData.title_results.length > 0) {
            const showID = searchData.title_results[0].id;

            const showDetailsResponse = await fetch(
              `https://api.watchmode.com/v1/title/${showID}/details/?apiKey=${API_KEY}`
            );
            const showDetails = await showDetailsResponse.json();

            const netflixSource = showDetails.sources?.find(
              (source) => source.name === "Netflix"
            );
            console.log("Shows in Context:", shows);

            shows.push({
              id: showID,
              title: showDetails.title,
              description: showDetails.plot_overview,
              genre: showDetails.genre_names,
              poster: showDetails.poster_url,
              trailer: showDetails.trailer,
              netflixLink: netflixSource ? netflixSource.web_url : null,
            });
          }
        }
        setShows(shows);
      } catch (e) {
        console.error("fetching error", e);
        return [];
      }
    };
    getShows();
  }, []);

  return (
    <ShowContext.Provider value={{ shows }}>{children}</ShowContext.Provider>
  );
};

export const useShows = () => useContext(ShowContext);
