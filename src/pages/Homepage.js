import { Link } from "react-router-dom";
import "./Homepage.css";

export const Homepage = () => {
  return (
    <div className="homepageContainer">
      <h3>Welcome to the Reader shop!</h3>
      <p>What would you like to equip your store with?</p>
      <Link to="/shop" className="linkBtn">
        {" "}
        Check out our Readers
      </Link>
    </div>
  );
};
