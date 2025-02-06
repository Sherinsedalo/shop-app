export const getShows = async () => {
  const API_KEY = "33gZNz0WLTxkEBQWSAAGlbiH9C90HEbB9DJcqRJ7";
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

        const showInfoURL = `https://api.watchmode.com/v1/title/${showID}/details/?apiKey=${API_KEY}`;
        const showInfoResponse = await fetch(showInfoURL);
        const showInfoData = await showInfoResponse.json();

        shows.push({
          id: showInfoData.id,
          title: showInfoData.title,
          description: showInfoData.plot_overview,
          genre: showInfoData.genre_names,
          poster: showInfoData.poster_url,
        });
      }
    }
    return shows;
  } catch (e) {
    console.error("fetching error", e);

    return "An error occured.Please try again.";
  }
};
