import { createContext, useState, useContext, useEffect } from "react";
import { mockShows } from "../mock/showMock";
const ShowContext = createContext();

export const ShowProvider = ({ children }) => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    setShows(mockShows);
  }, []);
  return (
    <ShowContext.Provider value={{ shows }}>{children}</ShowContext.Provider>
  );
};

export const useShows = () => useContext(ShowContext);
